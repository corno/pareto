#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function processFile(filePath) {
    console.log(`Testing script on: ${filePath}`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const newLines = [];
    const changes = [];
    
    let i = 0;
    while (i < lines.length) {
        let line = lines[i];
        
        // Look for t.group( at the beginning of a line
        if (line.includes('t.group(')) {
            newLines.push(line);
            i++;
            
            // Find the indentation of the t.group line
            let groupIndent = line.match(/^(\s*)/)[1].length;
            let targetIndent = groupIndent + 4; // Assuming 4-space indentation
            
            // Process following lines until we reach the closing of this group
            while (i < lines.length) {
                let currentLine = lines[i];
                let currentIndent = currentLine.match(/^(\s*)/)[1].length;
                
                // Stop when indentation becomes same as t.group line
                if (currentIndent <= groupIndent && currentLine.trim() !== '') {
                    break;
                }
                
                // Process lines with indentation + 1 (target indentation)
                if (currentIndent === targetIndent) {
                    console.log(`????`, currentLine)
                    // Check if line contains `".*" :`
                    if (currentLine.substring(targetIndent).trim().match(/^"[^"]*"\s*:.*/)) {
                        // Transform to `".*": prop(`
                        let match = currentLine.match(/^(\s*"[^"]*"\s*:\s*)(.+)$/);
                        if (match && !currentLine.includes('prop(')) {
                            let value = match[2].replace(/,\s*$/, ''); // Remove trailing comma
                            // If the value ends with {, don't add closing parenthesis
                            if (value.trim().endsWith('{')) {
                                currentLine = match[1] + 'prop(' + value;
                            } else {
                                currentLine = match[1] + 'prop(' + value + '),';
                            }
                            changes.push('Wrapped property with prop()');
                        }
                    }
                    // Check if line starts with } after removing proper indentation
                    else if (currentLine.substring(targetIndent).trim().startsWith('}')) {
                        // Add trailing ) before the comma
                        if (!currentLine.includes(')')) {
                            currentLine = currentLine.replace(/^(\s*})\s*(,?)\s*$/, '$1)$2');
                            changes.push('Added closing ) to group');
                        }
                    }
                }
                // Ignore lines with indentation +2 and up (deeper nesting)
                // Just add them as-is
                
                newLines.push(currentLine);
                i++;
            }
        } else {
            newLines.push(line);
            i++;
        }
    }
    
    if (changes.length > 0) {
        // Write the modified content back to the file
        fs.writeFileSync(filePath, newLines.join('\n'));
        console.log(`✅ Made ${changes.length} changes in: ${filePath}`);
        changes.forEach(change => console.log(`   - ${change}`));
    } else {
        console.log(`✅ No changes needed in: ${filePath}`);
    }
}

// Get file path from command line arguments
const filePath = process.argv[2];

if (!filePath) {
    console.error('Usage: node wrap_props_fixed.js <file-path>');
    process.exit(1);
}

if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    process.exit(1);
}

processFile(filePath);
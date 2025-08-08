import * as pd from 'exupery-core-data'

import {
    types,
    n,
    text,
    t,
    tr,
    type,
} from "../../../../shorthands/schema"
import * as g_ from "../../../../generated/interface/schemas/schema/data_types/unresolved"

export const $: g_.Types<pd.Source_Location>  = types(
    {
        "Phrasing content": type(t.list(t.state_group({
            "text": t.text_global("TBD"),
            "element": t.component_cyclic("Phrasing"),
        }))),

        "Flow content": type(t.list(t.state_group({
            "phrase": t.component("Phrasing content"),
            "flow": t.component_cyclic("Flow"),
        }))),

        /*
        Elements to do:
        summary (details)
    
        dl:
        dd
        dt
    
        legend (fieldset)
    
        li (list/menu)
    
        media:
        track
    
        meta:
        style
    
        source (picture/mediaelement)
    
        ruby:
        rp
        rt
    
        select:
        optgroup
        option
    
        table:
        caption
        col
        colgroup
        tbody
        td
        tfoot
        th
        thead
        tr
        */

        "Document": type(t.group({
            "lang": t.optional(t.text_global("TBD")),
            "head": t.group({
                "title": t.text_global("TBD")
            }),
            "body": t.component("Flow content")
        })),

        "Edit": type(t.group({
            "cite": t.optional(t.text_global("TBD")),
            "datetime": t.optional(t.text_global("TBD")),
        })),

        "Embedded": type(t.state_group({
            "audio": t.group({
                /*FIXME*/
                // If the element has a src attribute: zero or more track elements, then transparent, but with no media element descendants.
                // If the element does not have a src attribute: zero or more source elements, then zero or more track elements, then transparent, but with no media element descendants.
            }),
            "embed": t.group({
                /*FIXME*/
                // src — Address of the resource
                // type — Type of embedded resource
                // width — Horizontal dimension
                // height — Vertical dimension
                // Any other attribute that has no namespace (see prose).
            }),
            "iframe": t.group({
                /*FIXME*/
                // src — Address of the resource
                // srcdoc — A document to render in the iframe
                // name — Name of content navigable
                // sandbox — Security rules for nested content
                // allow — Permissions policy to be applied to the iframe's contents
                // allowfullscreen — Whether to allow the iframe's contents to use requestFullscreen()
                // width — Horizontal dimension
                // height — Vertical dimension
                // referrerpolicy — Referrer policy for fetches initiated by the element
                // loading — Used when determining loading deferral
            }),
            "img": t.group({
                /*FIXME*/
                // alt — Replacement text for use when images are not available
                // src — Address of the resource
                // srcset — Images to use in different situations, e.g., high-resolution displays, small monitors, etc.
                // sizes — Image sizes for different page layouts
                // crossorigin — How the element handles crossorigin requests
                // usemap — Name of image map to use
                // ismap — Whether the image is a server-side image map
                // width — Horizontal dimension
                // height — Vertical dimension
                // referrerpolicy — Referrer policy for fetches initiated by the element
                // decoding — Decoding hint to use when processing this image for presentation
                // loading — Used when determining loading deferral
                // fetchpriority — Sets the priority for fetches initiated by the element
            }),
            "object": t.group({
                /*FIXME*/
                // data — Address of the resource
                // type — Type of embedded resource
                // name — Name of content navigable
                // form — Associates the element with a form element
                // width — Horizontal dimension
                // height — Vertical dimension
                "content": t.component_cyclic("Embedded content")
            }),
            "video": t.group({
                /*FIXME*/
                // src — Address of the resource
                // crossorigin — How the element handles crossorigin requests
                // poster — Poster frame to show prior to video playback
                // preload — Hints how much buffering the media resource will likely need
                // autoplay — Hint that the media resource can be started automatically when the page is loaded
                // playsinline — Encourage the user agent to display video content within the element's playback area
                // loop — Whether to loop the media resource
                // muted — Whether to mute the media resource by default
                // controls — Show user agent controls
                // width — Horizontal dimension
                // height — Vertical dimension
                //Content:
                //If the element has a src attribute: zero or more track elements, then transparent, but with no media element descendants.
                //If the element does not have a src attribute: zero or more source elements, then zero or more track elements, then transparent, but with no media element descendants.
            }),
            "canvas": t.group({
                /*FIXME*/
                // width — Horizontal dimension
                // height — Vertical dimension
                //content
                //Transparent, but with no interactive content descendants except for a elements, img elements with usemap attributes, button elements, input elements whose type attribute are in the Checkbox or Radio Button states,
                // input elements that are buttons, and select elements with a multiple attribute or a display size greater than 1.
            }),
            "math": t.group({/*FIXME*/ }),
            "picture": t.group({
                /*FIXME*/
                //Zero or more source elements, followed by one img element, optionally intermixed with script-supporting elements.
            }),
            "svg": t.group({/*FIXME*/ }),
        })),

        "Embedded content": type(t.list(t.component("Embedded"))),

        "Template": type(t.component("Flow content")),

        "Script supporting": type(t.state_group({
            "script": t.group({
                /*FIXME*/
                // src — Address of the resource
                // type — Type of script
                // nomodule — Prevents execution in user agents that support module scripts
                // async — Execute script when available, without blocking while fetching
                // defer — Defer script execution
                // crossorigin — How the element handles crossorigin requests
                // integrity — Integrity metadata used in Subresource Integrity checks [SRI]
                // referrerpolicy — Referrer policy for fetches initiated by the element
                // blocking — Whether the element is potentially render-blocking
                // fetchpriority — Sets the priority for fetches initiated by the element
                //content:
                //If there is no src attribute, depends on the value of the type attribute, but must match script content restrictions.
                //If there is a src attribute, the element must be either empty or contain only script documentation that also matches script content restrictions.
            }),
            "template": t.component("Template"),
        })),

        "Heading": type(t.state_group({
            "h1": t.component("Phrasing content"),
            "h2": t.component("Phrasing content"),
            "h3": t.component("Phrasing content"),
            "h4": t.component("Phrasing content"),
            "h5": t.component("Phrasing content"),
            "h6": t.component("Phrasing content"),
            "hgroup": t.group({
                "content before": t.state_group({
                    "p": t.group({/*FIXME*/ }),
                    "script supporting": t.component("Script supporting"),
                }),
                "heading": t.state_group({
                    "h1 ": t.component("Phrasing content"),
                    "h2": t.component("Phrasing content"),
                    "h3": t.component("Phrasing content"),
                    "h4": t.component("Phrasing content"),
                    "h5": t.component("Phrasing content"),
                    "h6": t.component("Phrasing content"),
                }),
                "content after": t.state_group({
                    "p": t.group({/*FIXME*/ }),
                    "script supporting": t.component("Script supporting"),
                }),
            }),
        })),
        
        //"Heading content": type(list(component("Heading"))),
        //"Script supporting content": type(list(component("Script supporting"))),

        "Sectioning content": type(t.state_group({
            "article": t.component("Flow content"),
            "aside": t.component("Flow content"),
            "nav": t.component("Flow content"),
            "section": t.component("Flow content"),
        })),

        "Flow": type(t.state_group({
            //generic attributes
            "id": t.group({
                "id": t.text_global("TBD"),
                "child": t.component_cyclic("Flow")
            }),
            "class": t.group({
                "class": t.text_global("TBD"),
                "child": t.component_cyclic("Flow")
            }),
            /*
            a'phrase' element does not exist in HTML, but this deviation from the standard is needed to handle whitespace properly 
            */
            "script supporting": t.component("Script supporting"),
            "embedded": t.component("Embedded"),
            "details": t.group({
                "summary": t.list(t.state_group({
                    "phrasing": t.component("Phrasing content"),
                    "heading": t.component("Heading"),
                })),
                "content": t.component("Flow content"),
            }),
            "address": t.group({
                /*FIXME*/
                //Flow content, but with no heading content descendants, no sectioning content descendants, and no header, footer, or address element descendants.Flow content, but with no heading content descendants, no sectioning content descendants, and no header, footer, or address element descendants.
            }),
            "blockquote": t.group({
                "cite": t.text_global("TBD"),
                "content": t.component("Flow content")
            }),
            "del": t.group({
                "edit": t.component("Edit"),
                "content": t.component("Flow content")
            }),
            "dialog": t.group({
                "open": t.optional(t.text_global("TBD")),
                "content": t.component("Flow content"),
            }),
            "div": t.component("Flow content"),
            "dl": t.state_group({
                "divs": t.group({/*FIXME*/ }),
                "dts": t.group({/*FIXME*/ }),
            }), //description list
            "fieldset": t.group({
                /*FIXME*/
                "legend": t.optional(t.group({/*FIXME*/ })),
                // disabled — Whether the descendant form controls, except any inside legend, are disabled
                // form — Associates the element with a form element
                // name — Name of the element to use in the form.elements API.
                "content": t.component("Flow content"),
            }),
            "figure": t.group({
                "caption": t.optional(t.group({
                    "content": t.component("Flow content"),
                    "position": t.state_group({
                        "top": t.group({}),
                        "botom": t.group({}),
                    })
                })),
                "content": t.component("Flow content"),
            }),
            "footer": t.group({
                /*FIXME*/
                //Flow content, but with no header or footer element descendants
            }),
            "form": t.group({
                /*FIXME*/
                // accept-charset — Character encodings to use for form submission
                // action — URL to use for form submission
                // autocomplete — Default setting for autofill feature for controls in the form
                // enctype — Entry list encoding type to use for form submission
                // method — Variant to use for form submission
                // name — Name of form to use in the document.forms API
                // novalidate — Bypass form control validation for form submission
                // target — Navigable for form submission
                // rel
                //"content": Flow content, but with no form element descendants.
            }),
            "header": t.group({
                /*FIXME*/
                //Flow content, but with no header or footer element descendants
            }),
            "hr": t.group({}),
            "ins": t.group({
                "edit": t.component("Edit"),
                "content": t.component("Flow content")
            }),
            /*
            FIXME
            A hierarchically correct main element is one whose ancestor elements are limited to html, body, div, form
            without an accessible name, and autonomous custom elements. Each main element must be a hierarchically correct main element.
            */
            "main": t.component("Flow content"),
            "map": t.group({
                "name": t.text_global("TBD"),
                "content": t.component("Flow content")
            }),
            "menu": t.list(t.state_group({
                "li": t.component("Flow content"),
                "script supporting": t.component("Script supporting"),
            })),
            "object": t.group({
                /*FIXME*/
                // data — Address of the resource
                // type — Type of embedded resource
                // name — Name of content navigable
                // form — Associates the element with a form element
                // width — Horizontal dimension
                // height — Vertical dimension
                "content": t.component("Flow content")
            }),
            "ol": t.group({
                "reversed": t.optional(t.text_global("TBD")),
                "start": t.optional(t.text_global("TBD")),
                "type": t.optional(t.state_group({
                    "1": t.group({}),
                    "a": t.group({}),
                    "A": t.group({}),
                    "i": t.group({}),
                    "I": t.group({}),
                })),
                "content": t.list(t.state_group({
                    "li": t.group({
                        "value": t.text_global("TBD"),
                        "content": t.component("Flow content"),
                    }),
                    "script supporting": t.component("Script supporting"),
                }))
            }),
            "p": t.component("Phrasing content"),
            "pre": t.component("Phrasing content"),
            "search": t.component("Flow content"),
            "slot": t.group({
                "name": t.text_global("TBD"),
                "content": t.component("Flow content"),
            }),
            "table": t.group({
                /*FIXME*/
                "caption": t.optional(t.component("Flow content")),
                "colgroups": t.list(t.group({/*FIXME*/ })),
                //"thead": prop(optional(component("Flow content"))),

            }),
            "ul": t.list(t.state_group({
                "li": t.component("Flow content"),
                "script supporting": t.component("Script supporting"),
            })),
            "heading": t.component("Heading"),
            "sectioning": t.component("Sectioning content"),
        })),
        
        "Phrasing": type(t.state_group({
            //generic attributes
            "id": t.group({
                "id": t.text_global("TBD"),
                "child": t.component_cyclic("Phrasing")
            }),
            "class": t.group({
                "class": t.text_global("TBD"),
                "child": t.component_cyclic("Phrasing")
            }),

            //elements
            "link": t.group({
                /*FIXME*/
                // href — Address of the hyperlink
                // crossorigin — How the element handles crossorigin requests
                // rel — Relationship between the document containing the hyperlink and the destination resource
                // media — Applicable media
                // integrity — Integrity metadata used in Subresource Integrity checks [SRI]
                // hreflang — Language of the linked resource
                // type — Hint for the type of the referenced resource
                // referrerpolicy — Referrer policy for fetches initiated by the element
                // sizes — Sizes of the icons (for rel="icon")
                // imagesrcset — Images to use in different situations, e.g., high-resolution displays, small monitors, etc. (for rel="preload")
                // imagesizes — Image sizes for different page layouts (for rel="preload")
                // as — Potential destination for a preload request (for rel="preload" and rel="modulepreload")
                // blocking — Whether the element is potentially render-blocking
                // color — Color to use when customizing a site's icon (for rel="mask-icon")
                // disabled — Whether the link is disabled
                // fetchpriority — Sets the priority for fetches initiated by the element
                // Also, the title attribute has special semantics on this element: Title of the link; CSS style sheet set name.
            }),
            "meta": t.group({
                /*FIXME*/

                // name — Metadata name
                // http-equiv — Pragma directive
                // content — Value of the element
                // charset — Character encoding declaration
                // media — Applicable media

                //where to be used:
                // If the charset attribute is present, or if the element's http-equiv attribute is in the Encoding declaration state: in a head element.
                // If the http-equiv attribute is present but not in the Encoding declaration state: in a head element.
                // If the http-equiv attribute is present but not in the Encoding declaration state: in a noscript element that is a child of a head element.
                // If the name attribute is present: where metadata content is expected.
                // If the itemprop attribute is present: where metadata content is expected.
                // If the itemprop attribute is present: where phrasing content is expected.                
            }),
            "noscript": t.group({
                /*FIXME*/
                //content: 
                // When scripting is disabled, in a head element: in any order, zero or more link elements, zero or more style elements, and zero or more meta elements.
                // When scripting is disabled, not in a head element: transparent, but there must be no noscript element descendants.
                // Otherwise: text that conforms to the requirements given in the prose.

            }),
            "object": t.group({
                /*FIXME*/
                // data — Address of the resource
                // type — Type of embedded resource
                // name — Name of content navigable
                // form — Associates the element with a form element
                // width — Horizontal dimension
                // height — Vertical dimension
                "content": t.component("Phrasing content")
            }),
            "script supporting": t.component("Script supporting"),
            "a": t.group({/*FIXMEX*/ }),
            "button": t.group({
                /*FIXME*/
                // disabled — Whether the form control is disabled
                // form — Associates the element with a form element
                // formaction — URL to use for form submission
                // formenctype — Entry list encoding type to use for form submission
                // formmethod — Variant to use for form submission
                // formnovalidate — Bypass form control validation for form submission
                // formtarget — Navigable for form submission
                // name — Name of the element to use for form submission and in the form.elements API
                // popovertarget
                // popovertargetaction
                // type — Type of button
                // value — Value to be used for form submission  

                //content:
                //Phrasing content, but there must be no interactive content descendant and no descendant with the tabindex attribute specified.

            }),
            "input": t.group({
                /*FIXME*/
                // accept — Hint for expected file type in file upload controls
                // alt — Replacement text for use when images are not available
                // autocomplete — Hint for form autofill feature
                // checked — Whether the control is checked
                // dirname — Name of form control to use for sending the element's directionality in form submission
                // disabled — Whether the form control is disabled
                // form — Associates the element with a form element
                // formaction — URL to use for form submission
                // formenctype — Entry list encoding type to use for form submission
                // formmethod — Variant to use for form submission
                // formnovalidate — Bypass form control validation for form submission
                // formtarget — Navigable for form submission
                // height — Vertical dimension
                // list — List of autocomplete options
                // max — Maximum value
                // maxlength — Maximum length of value
                // min — Minimum value
                // minlength — Minimum length of value
                // multiple — Whether to allow multiple values
                // name — Name of the element to use for form submission and in the form.elements API
                // pattern — Pattern to be matched by the form control's value
                // placeholder — User-visible label to be placed within the form control
                // popovertarget
                // popovertargetaction
                // readonly — Whether to allow the value to be edited by the user
                // required — Whether the control is required for form submission
                // size — Size of the control
                // src — Address of the resource
                // step — Granularity to be matched by the form control's value
                // type — Type of form control
                // value — Value of the form control
                // width — Horizontal dimension
                // Also, the title attribute has special semantics on this element: Description of pattern (when used with pattern attribute).
            }),
            "label": t.group({
                /*FIXME*/
                //for — Associate the label with form control
                //content: Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.
            }),
            "select": t.group({
                // autocomplete — Hint for form autofill feature
                // disabled — Whether the form control is disabled
                // form — Associates the element with a form element
                // multiple — Whether to allow multiple values
                // name — Name of the element to use for form submission and in the form.elements API
                // required — Whether the control is required for form submission
                // size — Size of the control
                "content": t.list(t.state_group({
                    "option": t.group({/*FIXME*/ }),
                    "optgroup": t.group({
                        //label
                        //disabled
                        "options": t.list(t.group({
                            /*FIXME*/
                        }))
                    }),
                    "script supporting": t.component("Script supporting"),
                })),
            }),
            "textarea": t.group({
                /*FIXME*/
                // autocomplete — Hint for form autofill feature
                // cols — Maximum number of characters per line
                // dirname — Name of form control to use for sending the element's directionality in form submission
                // disabled — Whether the form control is disabled
                // form — Associates the element with a form element
                // maxlength — Maximum length of value
                // minlength — Minimum length of value
                // name — Name of the element to use for form submission and in the form.elements API
                // placeholder — User-visible label to be placed within the form control
                // readonly — Whether to allow the value to be edited by the user
                // required — Whether the control is required for form submission
                // rows — Number of lines to show
                // wrap — How the value of the form control is to be wrapped for form submission 
                "content": t.text_global("TBD"),
            }),
            "abbr": t.group({
                "title": t.text_global("TBD"),
                "content": t.component("Phrasing content"),
            }),
            "area": t.group({ //FIXME: needs a 'map' ancestor
                /*FIXME*/
                // alt — Replacement text for use when images are not available
                // coords — Coordinates for the shape to be created in an image map
                // shape — The kind of shape to be created in an image map
                // href — Address of the hyperlink
                // target — Navigable for hyperlink navigation
                // download — Whether to download the resource instead of navigating to it, and its filename if so
                // ping — URLs to ping
                // rel — Relationship between the location in the document containing the hyperlink and the destination resource
                // referrerpolicy — Referrer policy for fetches initiated by the element
            }),
            "b": t.component("Phrasing content"),
            "bdi": t.group({
                "dir": t.text_global("TBD"),
                "content": t.component("Phrasing content"),
            }),
            "bdo": t.group({
                "dir": t.text_global("TBD"),
                "content": t.component("Phrasing content"),
            }),
            "br": t.group({}), //line break
            "cite": t.component("Phrasing content"),
            "code": t.component("Phrasing content"),
            "data": t.group({
                "value": t.text_global("TBD"),
                "content": t.component("Phrasing content"),
            }),
            "datalist": t.state_group({
                "phrasing": t.component("Phrasing content"),
                "options": t.list(t.state_group({
                    "option": t.group({/*FIXME*/ }),
                    "script supporting": t.component("Script supporting"),
                })),
            }),
            "del": t.group({
                "edit": t.component("Edit"),
                "content": t.component("Phrasing content")
            }),
            "dfn": t.group({ //FIXME: there may not be a dfn ancestor
                "title": t.text_global("TBD"),
                "content": t.component("Phrasing content"),
            }),
            "em": t.component("Phrasing content"),
            "i": t.component("Phrasing content"),
            "ins": t.group({
                "edit": t.component("Edit"),
                "content": t.component("Phrasing content")
            }),
            "kbd": t.component("Phrasing content"),
            "map": t.group({
                "name": t.text_global("TBD"),
                "content": t.component("Phrasing content")
            }),
            "mark": t.component("Phrasing content"),
            "meter": t.group({
                /*FIXME*/

                // value — Current value of the element
                // min — Lower bound of range
                // max — Upper bound of range
                // low — High limit of low range
                // high — Low limit of high range
                // optimum — Optimum value in gauge

                // content:
                // Phrasing content, but there must be no meter element descendants.
            }),
            "output": t.group({
                "for": t.optional(t.text_global("TBD")),
                "form": t.text_global("TBD"),//optional?
                "name": t.text_global("TBD"),//optional?
                "content": t.component("Phrasing content"),
            }),
            "progress": t.group({ //FIXME: there may not be any progress element ancestors
                "value": t.text_global("TBD"),
                "max": t.text_global("TBD"),
                "content": t.component("Phrasing content"),
            }),
            "q": t.group({
                "cite": t.text_global("TBD"),
                "content": t.component("Phrasing content"),
            }),
            "ruby": t.group({
                /*FIXME*/
                // One or the other of the following:
                // Phrasing content, but with no ruby elements and with no ruby element descendants
                // A single ruby element that itself has no ruby element descendants
                // One or the other of the following:
                // One or more rt elements
                // An rp element followed by one or more rt elements, each of which is itself followed by an rp element            
            }),
            "s": t.component("Phrasing content"),
            "samp": t.component("Phrasing content"),
            "slot": t.group({
                "name": t.text_global("TBD"),
                "content": t.component("Phrasing content"),
            }),
            "small": t.component("Phrasing content"),
            "span": t.component("Phrasing content"),
            "strong": t.component("Phrasing content"),
            "sub": t.component("Phrasing content"),
            "sup": t.component("Phrasing content"),
            "time": t.state_group({
                "datetime": t.group({
                    "value": t.text_global("TBD"),
                    "content": t.component("Phrasing content")
                }),
                "text": t.text_global("TBD"),
            }),
            "u": t.component("Phrasing content"),
            "var": t.component("Phrasing content"),
            "wbr": t.group({}), //line break opportunity
            "embedded": t.component("Embedded"),
        })),
    }
)



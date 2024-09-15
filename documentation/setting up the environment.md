
# ubuntu
install Ubuntu as default as possible (tested with version 24.04.1)

create a directory named 'workspace' in the home directory.

open directory in terminal.


# github / SSH

https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

````
$ ssh-keygen -t ed25519 -C "your_email@example.com"
# choose all defaults

$ eval "$(ssh-agent -s)"

$ ssh-add ~/.ssh/id_ed25519

$ cat ~/.ssh/id_ed25519.pub

#Then select and copy the contents of the id_ed25519.pub file displayed in the terminal to your clipboard
````

add it to github (see [manual](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)) 


# vscode

download from [vscode](https://code.visualstudio.com/download) (tested with 1.93.1)

````
$ sudo dpkg -i ~corno/Downloads/code_1.93.1-1726079302_amd64.deb
````

# git

```
$ sudo apt install git
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
````
clone a repo, for example:

````
$ git clone git@github.com:corno/pareto-standard-library
````

don't clone from withing vscode, it will use https instead of ssh causing popups

# curl

````
$ sudo apt install curl
````

# nodejs and npm

if below fails, close terminal, retry

````
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
# download and install Node.js (you may need to restart the terminal)
nvm install 20
# verifies the right Node.js version is in the environment
node -v # should print `v20.17.0`
# verifies the right npm version is in the environment
npm -v # should print `10.8.2`
````

#

right click on the created directory and open with vscode

open terminal within vscode

````
$ cd ./packages/glo-pareto-common/
$ ./scripts/initialize.sh
$ ./scripts/scripts/buildFromScratch.sh
````
voila


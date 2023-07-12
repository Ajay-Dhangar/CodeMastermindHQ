Fira Code: free monospaced font with programming ligatures

## via zip-archive  

### 1. Install the font

Go to https://github.com/tonsky/FiraCode and download the fonts, after you’ve downloaded, In the ttf folder, double-click each font file, click “Install font”; to install all at once, select all files, right-click, and choose “Install” (I chose: Install for all users) 

### 2. Configuring Visual studio code 

Open the user and workspace settings from the Command Palette (Ctrl+Shift+P) with **Preferences: Open User Settings and Preferences**. 

To enable FiraCode in the settings editor, under “Commonly Used”, expand the “Text Editor” settings and then click on “Font”. In the “Font Family” input box type Fira Code, replacing any content. Tick the check box "Enabled/Disables font ligatures" under "Font Ligatures" to enable the special ligatures. 

## via bash
 
@kwmiebach
kwmiebach commented on Mar 23, 2017  

One way to do it on Debian 8. As root: 

```bash
apt install git   # skip this if you have git installed 

cd /usr/share/fonts   # system wide fonts 
 
git clone --depth 1 https://github.com/tonsky/FiraCode.git   # get only the last commit of the master branch  

cd FiraCode 
 
git filter-branch --subdirectory-filter distr   # This keeps only the contents of the distr/ directory and moves its contents one level up. 

fc-cache -f -v
```
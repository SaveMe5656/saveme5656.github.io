# Finalizing Setup

> [!IMPORTANT]
> This is a modified version of an old version of ["finalizing-setup"](https://3ds.hacks.guide/finalizing-setup) part of the **3DS Hacks Guide** (https://3ds.hacks.guide). You can find the source [here](https://github.com/hacks-guide/Guide_3DS/blob/8c2613d88bf35f5cd1a1efc8e969fef404c9a55b/_pages/en_US/finalizing-setup.txt).

## Required Reading

On the previous page, you installed boot9strap, a custom firmware loader that loads the file `boot.firm` from SD card or NAND (internal memory). In this case, we are using Luma3DS by [LumaTeam](https://github.com/LumaTeam/) as our `boot.firm` to patch the console, allowing it to run homebrew software.

On this page, we will make critical system file backups and install some homebrew programs, such as:

+  **GodMode9** by d0k3 *(multipurpose tool for extracting data from internal memory or cartridges)*
+  **Homebrew Launcher Loader** by PabloMK7 *(runs Homebrew Launcher, for 3DSX format homebrew)*
+  **FBI** by Steveice10 *(installs CIA formatted applications)*
+  **Universal Updater** by Universal-Team *(on-device app store for downloading homebrew over Wi-Fi)*
+  **Anemone3DS** by astronautlevel2 *(installs custom themes, splashes, and badges)*
+  **Checkpoint** by BernardoGiordano/FlagBrew *(manages 3DS/DS game save data)*
+  **ftpd** by mtheall *(allows wireless 3DS SD card access over FTP)*
+  **3hs** by Erista Group *(allows installing content formerly purchased from the Nintendo eShop from hShop on your 3DS directly)*

Most of these steps can be automated using a script that is run on your console. The script will install the preceding applications.

If you don't want one of them, you can remove them after you have finished this page by navigating to System Settings -> Data Management -> Nintendo 3DS -> Software. (GodMode9 cannot be removed in this way and is generally required for other functions.)

> [!NOTE]
> Each of these programs is recommended for general use, although some aren't completely necessary. If you think you know what you're doing, feel free to pick and choose which programs you specifically want.

> [!CAUTION]
> As useful as 3hs may be, freely downloading software that normally costs real-world money is considered piracy. Many modders are against piracy, especially due to Nintendo's history with piracy in association with homebrew. Do not expect help with 3hs or other piracy software, and use 3hs at your own risk.

## Compatibility Notes

> [!IMPORTANT]
> If your previous CFW setup was EmuNAND-based and you wish to move the contents of your EmuNAND/RedNAND to SysNAND, follow [Move EmuNAND](https://3ds.hacks.guide/move-emunand) before following this page. If you don't know what an EmuNAND is, this doesn't apply to you.

## What You Need

### Section I - Manual Install

Required for manual install:
* The latest release of [GodMode9](https://github.com/d0k3/GodMode9/releases/latest) (the GodMode9 `.zip` file)

Recommended:
* The latest release of [Homebrew Launcher Wrapper](https://github.com/PabloMK7/homebrew_launcher_dummy/releases/latest) (the `.cia` file)
* The latest release of [FBI](https://github.com/lifehackerhansol/FBI/releases/latest) (the `.3dsx` file and/or `.cia` file)
* The latest release of [Universal Updater](https://github.com/Universal-Team/Universal-Updater/releases/latest) (the `.3dsx` file, and/or `.cia` file/QR code)

Optional:
* The latest release of [Anemone3DS](https://github.com/astronautlevel2/Anemone3DS/releases/latest) (the `.3dsx` file, and/or `.cia` file/QR code)
* The latest release of [Checkpoint](https://github.com/bernardogiordano/checkpoint/releases/latest) (the `.3dsx` file, and/or `.cia` file/QR code)
* The latest release of [ftpd](https://github.com/mtheall/ftpd/releases/latest) (the `.3dsx` file and/or `.cia` file)
* [3hs](https://hshop.erista.me/3hs) (the `.3dsx` file, and/or `.cia` file/QR code; files are downloaded using the buttons on the site)

> [!NOTE]
> **GodMode9**, **Homebrew Launcher Loader**, **FBI**, **Anemone3DS**, **Checkpoint**, and **ftpd** can alternatively be installed using Universal Updater. They may be acquired separately if not using the finalize helper.

> [!WARNING]
> **3hs** CANNOT be installed with Universal Updater as it is not in its database. This are likely due to 3hs being piracy software.

### Section II - Setup Script

* `x_finalize_helper.firm` and `finalize.romfs` (3ds.hacks.guide's [finalize helper](https://github.com/hacks-guide/finalize/releases/latest) files)

> [!WARNING]
> **3hs** is NOT included in the finalize helper. This are likely due to 3hs being piracy software.

## Instructions

### Section I - Prep Work

In this section, you will copy the files necessary to follow the rest of the instructions on this page.

1. Power off your console
1. Insert your SD card into your computer
1. Create a folder named `cias` on the root of your SD card if it does not already exist
1. Copy any and all of the CIA files (`Homebrew_Launcher.cia`, `FBI.cia`, etc.) to the `/cias/` folder on your SD card
1. Create a folder named `3ds` on the root of your SD card if it does not already exist
    + This folder stores homebrew applications and data; it is different from the `Nintendo 3DS` folder that the console automatically generates
1. Copy any and all of the 3DSX files (`FBI.3dsx`, `Universal-Updater.3dsx`, etc.) to the `/3ds/` folder on your SD card
1. Open the `luma` folder on your SD card and create a folder named `payloads` inside, if it does not already exist
1. If you downloaded GodMode9 manually:
   - Copy `GodMode9.firm` from the GodMode9 `.zip` to the `/luma/payloads/` folder on your SD card
   - Copy the `gm9` folder from the GodMode9 `.zip` to the root of your SD card
1. If you downloaded the finalize helper:
   - Copy `x_finalize_helper.firm` to the `payloads` folder
   - Copy `finalize.romfs` to the root of your SD card
1. Reinsert your SD card into your console

The screenshots below indicate the minimum SD card layouts that are required to follow this page. You may have extra files or folders on your SD card, depending on your previous setup or the method that you followed.

> Manual Install:
> > ![](https://web.archive.org/web/20230621042034if_/3ds.hacks.guide/images/screenshots/finalizing-root-layout.png)
>
> > ![](https://3ds.hacks.guide/images/screenshots/godmode9-location.png)

> Setup Script:
> > ![](https://3ds.hacks.guide/images/screenshots/finalizing-root-layout.png)
>
> > ![](https://3ds.hacks.guide/images/screenshots/finalizing-luma-payloads.png)

### Section II - Updating the System

In this section, you will update your system to the latest version, which is safe to do with custom firmware.

1. Update your console by going to System Settings, then "Other Settings", then going all the way to the right and using "System Update"
    + Updates while using B9S + Luma (what you have) are safe
    + The updater may display a message saying "Your system is up to date" instead of updating. This is normal if you are already up to date; continue to the next section
    + If this gives you an error, set your DNS settings to "Auto" and your Proxy settings to "No"
    + If this still gives you an error, [follow this troubleshooting guide](https://3ds.hacks.guide/troubleshooting-finalizing-setup)

### Section III - RTC and DSP setup

In this section, you will sync your 3DS internal clock with the actual time and dump the sound firmware (which is necesssary for some homebrew software to use sound properly).

1. Press (Left Shoulder) + (D-Pad Down) + (Select) at the same time to open the Rosalina menu
    + If one of these buttons is broken, download [config.ini](https://3ds.hacks.guide/assets/config.ini) and put it in your `luma` folder, replacing the existing one. This will change the Rosalina menu key combination to (X) + (Y)
1. Select "Miscellaneous options"
1. Select "Dump DSP firmware"
1. Press (B) to continue
1. Select "Nullify user time offset"
1. Press (B) to continue
1. Press (B) to return to the Rosalina main menu
1. Press (B) to exit the Rosalina menu

### Section IV - Homebrew Launcher

In this subsection, you will temporarily replace Download Play with Homebrew Launcher (which we need to launch FBI). Download Play will automatically go back to normal once you reboot your console.

> [!NOTE]
> If you don't plan on adding any software from [What You Need: Section I - Manual Install](#section-i---manual-install), you can skip to [Section VIII - Setup Script](#section-viii---setup-script).

1. Launch the Download Play application (<a href="https://3ds.hacks.guide/images/download-play-icon.png"><img src="https://3ds.hacks.guide/images/download-play-icon.png" height="16"></a>)
1. Wait until you see the `Nintendo 3DS` and `Nintendo DS` buttons
1. Press (Left Shoulder) + (D-Pad Down) + (Select) at the same time to open the Rosalina menu
1. Select "Miscellaneous options"
1. Select "Switch the hb. title to the current app."
1. Press (B) to continue
1. Press (B) to return to the Rosalina main menu
1. Press (B) to exit the Rosalina menu
1. Press (Home) to suspend Download Play
1. Press the "Close" button on the bottom screen to close Download Play
1. Re-launch the Download Play application
1. Your console should load the Homebrew Launcher
    + If your console is stuck on the loading splash screen, you are missing `boot.3dsx` from the root of your SD card

### Section V - Installing CIAs

In this subsection, you will use FBI to install several useful homebrew applications to HOME Menu. These applications are installed manually from CIA files added to the SD card.

> [!NOTE]
> If you didn't add any CIAs at [What You Need: Section I - Manual Install](#section-i---manual-install), you can skip this section.

1. Launch FBI from the list of homebrew
1. Navigate to `SD` -> `cias`
1. Select "\<current directory>"
1. Select the "Install and delete all CIAs" option, then press (A) to confirm
1. Press (B) twice to return to the main menu
1. Press (Start) to close FBI

### Section V - Using Universal Updater

In this subsection, you will install several useful homebrew applications to HOME Menu.

> [!TIP]
> Through Universal Updater, you can download install many different user-made programs and applications through your 3DS. This includes emulators, utilities, and games.
>
> Universal Updater also shows an update icon next to software that has been installed through the program and will let you update it by choosing an option from the available downloads.

> [!NOTE]
> For the sake of this guide, you will just be installing any software that you didn't fetch in [What You Need: Section I - Manual Install](#section-i---manual-install).

> [!NOTE]
> If you don't plan on adding any programs or applications from Universal Updater, you can skip this section.

1. Launch Universal Updater
   + If you added the 3DSX file, select Universal Updater from the list of homebrew
   + If you added the CIA file, press (Home), close Download Play, then launch the newly installed Universal Updater application from the home menu
     + If you are prompted with the changelog, press (B) or the back arrow to continue
1. Locate GodMode9, Homebrew Launcher Loader, FBI, Anemone3DS, Checkpoint, and ftpd if you didn't add them; choose the options you want to install, then press (B) to return to the selector.
1. (Optional) Locate Luma3DS and 3ds-hbmenu; choose the options you want to install, then press (B) to return to the selector.
1. Press (Start) to close Universal Updater
1. If you are brought back to the Homebrew Launcher, press (Home), then close Download Play

### Section VII - GodMode9 Setup

In this section, you will manually install GodMode9 or Luma3DS to CTRNAND, cleanup the SD card, and backup system files. This is all done through GodMode9.

> [!WARNING]
> If you are using the setup script, STOP! Skip to [Section VIII - Setup Script](#section-viii---setup-script).

#### Subsection I - Booting GodMode9

In this subsection, you will boot GodMode9 to configure some internal settings.

1. Power off your console
1. Press and hold (Start), and while holding (Start), power on your console. This will launch GodMode9
   + If you do not boot into GodMode9, ensure that `GodMode9.firm` is in `/luma/payloads/` and that `payloads` is correctly spelled
1. If you are prompted to select a language, press (A) to do so
1. If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue once it has completed
1. If you are prompted to fix the RTC date&time, press (A) to do so, then set the date and time, then press (A) to continue

#### Subsection II - CTRNAND GodMode9

In this subsection, you will copy some of GodMode9's files to internal memory so that they can be accessed when an SD card is not inserted.

> [!NOTE]
> This means that intead of booting into the 3DS's normal system menu, GodMode9 will load up. Most people would rather have normal functionality. If you do not want GodMode9 to boot when an SD card is not inserted, skip this section.

1. Navigate to `[0:] SDCARD (LABEL)` -> `luma` -> `payloads`
1. Press (Y) on `GodMode9.firm` to copy it
1. Press (B) three times to return to root
1. Navigate to `[1:] SYSNAND CTRNAND`
1. Press (Y) to paste `GodMode9.firm`, then select "Copy path(s)"
1. Press (A) to unlock SysNAND (lvl1) writing, then input the key combo given
1. Press (B) to leave write permissions unlocked if prompted
1. Delete `boot.firm`, if it exists
1. Press (Right Shoulder) + (X) on `GodMode9.firm` to bring up the rename prompt
1. Press (A) to continue, then rename `GodMode9.firm` to `boot.firm`
1. Press (B) to return to root
1. Press (Right Shoulder) + (Y) to relock write permissions

#### Subsection III - CTRNAND Luma3DS

In this subsection, you will use a script to copy some of Luma3DS's files to internal memory so that they can be accessed, even without an SD card inserted.

> [!WARNING]
> If you set up GodMode9 to CTRNAND, STOP! Some of following steps will overwrite GodMode9 from CTRNAND.
>
> Skip steps 4-7 of this section.

1. Select "Scripts..."
1. Select "GM9Megascript"
1. Select "Scripts from Plailect's Guide"
1. Select "Setup Luma3DS to CTRNAND"
1. When prompted, press (A) to proceed
1. Press (A) to unlock SysNAND (lvl1) writing, then input the key combo given
1. Press (A) to continue

#### Subsection IV - Cleanup SD Card

In this subsection, you will use a script to remove some unnecessary files from your SD card.

1. Select "Cleanup SD Card"
1. When prompted, press (A) to proceed
1. Press (A) to unlock SysNAND (lvl1) writing, then input the key combo given
1. Press (A) to continue
1. Press (B) to return to the main menu

#### Subsection V - Backup Essential Files

In this subsection, you will make backups of files that can be used to recover from software bricks or to recover data.

1. Select "Backup Options"
1. Select "SysNAND Backup"
1. Press (A) to confirm
   + This process will take some time
   + If you encounter an error, consult the [troubleshooting](https://3ds.hacks.guide/troubleshooting-finalizing-setup) page
1. Press (A) to continue
1. Press (B) to return to the main menu
1. Select "Exit"
1. Press (A) to relock write permissions if prompted
1. Navigate to `[S:] SYSNAND VIRTUAL`
1. Press (A) on `essential.exefs` to select it
1. Select "Copy to 0:/gm9/out"
   + If you see "Destination already exists", press (A) on "Overwrite file(s)"
1. Press (A) to continue
1. Press (Home) to bring up the action menu
1. Select "Poweroff system" to power off your console
1. Insert your SD card into your computer
1. Copy the two `SysNAND` files and `essential.exefs` from the `/gm9/out/` folder on your SD card to a safe location on your computer
   + These files are critical backups and should be backed up to multiple locations (i.e. cloud storage) if possible
   + The two SysNAND files are your NAND backup and can be used to revert your console to a working state if it is bricked by a software issue
   + The `essential.exefs` file contains your console's system-unique files and can be used to recover your data in the event of a hardware failure
1. If you still have them, delete the two `SysNAND` files from the `/gm9/out/` folder from your SD card
   + The `essential.exefs` file is small and may be kept on your SD card for ease of access
1. If you have it, copy the `/luma/backups/` folder on your SD card to a safe location on your computer
1. Reinsert your SD card into your console


### Section VIII - Setup Script

In this section, you will use a series of scripts to automate homebrew installation, SD card cleanup, and system file backup.

> [!WARNING]
> If you followed [Section VII - GodMode9 Setup](#section-vii---godmode9-setup) are NOT using the setup script, STOP! This will redo/overwrite the steps performed in that section.
>
> Skip this section.

1. Power off your console
1. Press and hold (X), and while holding (X), power on your console. This will launch the Finalizing Setup Helper
   + If you boot to the HOME Menu, your `payloads` folder may be incorrectly spelled or in the wrong location
   + If you encounter an error, consult the [troubleshooting](https://3ds.hacks.guide/troubleshooting-finalizing-setup) page
1. If the Helper was successful, your console will boot into GodMode9
   + From this point forward, you can access GodMode9 by holding START while powering on your console
1. If you are prompted to create an essential files backup, press (A) to do so, then press (A) to continue once it has completed
1. If you are prompted to fix the RTC date&time, press (A) to do so, then set the date and time, then press (A) to continue
1. Press (Home) to bring up the action menu
1. Select "Scripts..."
1. Select "finalize"
1. Follow the prompts in the script, answering any questions that you are asked
   + If you see "Information #05: No title database", press (A) to import and enter the buttons on-screen to proceed
   + If you encounter an error, follow the instructions in the error message or consult the [troubleshooting](https://3ds.hacks.guide/troubleshooting-finalizing-setup) page
1. Once the script says "Setup complete!", press (A) to power off the device
   + If you do NOT see the message "Setup complete!", the script was not successful and you will need to redo this section from Step 3
1. Insert your SD card into your computer
1. Copy the `/gm9/backups/` folder to a safe location on your computer
   + This folder contains critical file backups and should be backed up to multiple locations (i.e. cloud storage) if possible
   + The two SysNAND files are your NAND backup and can be used to revert your console to a working state if it is bricked by a software issue
   + The `essential.exefs` file contains your console's system-unique files and can be used to recover your data in the event of a hardware failure
1. If you still have them, delete the two `SysNAND` files from the `/gm9/backups/` folder from your SD card
   + The `essential.exefs` file is small and may be kept on your SD card for ease of access

___

> [!TIP]
> You're done! Custom firmware is now fully configured on your console.

> [!NOTE]
> Trying to figure out what to do with your newly modded device? Visit [our wiki](https://wiki.hacks.guide/wiki/3DS:Things_to_do)!

### Information and Notes

> [!NOTE]
> Here are some key combos that you should know:
> + Holding (Select) on boot will launch the Luma3DS configuration menu.
> + Holding (Start) on boot will launch GodMode9, or if you have multiple payloads in `/luma/payloads/`, the Luma3DS chainloader.
> + By default, pressing (Left Shoulder) + (Down D-Pad) + (Select) while in 3DS mode will open the Rosalina menu, where you can check system information, take screenshots, enable cheats, and more. This can be changed from the Rosalina menu.
> + Holding (Start) + (Select) + (X) on boot will make the notification LED show a color for debug purposes. See the [changelog](https://github.com/SciresM/boot9strap/releases/tag/1.4) for a list.

### Pretendo

Pretendo is a replacement service for the Nintendo Network, which resurrects online services from the now shut down Nintendo Network. It also revives the Miiverse service, via juxtaposition. The official guide can be found [here](https://pretendo.network/docs/install/3ds).

**Note: Pretendo does not support every online service, however work is being done to achieve this.**

A list of games that Pretendo supports can be found [here](https://wiki.pretendo.zip/game-support-status).

> [!NOTE]
> For information on using GodMode9's various features, check out the [GodMode9 Usage](https://3ds.hacks.guide/godmode9-usage) and [Dumping Titles and Game Cartridges](https://3ds.hacks.guide/dumping-titles-and-game-cartridges) pages.

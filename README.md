[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg?display=inline-block)](https://github.com/rlueder/tidytweets/blob/main/LICENSE)

# Spicetify Announcer

> A Spicetify extension to announce song details, time and 
> local weather in-between tracks.

Spicetify Announcer uses [Amazon Polly](https://docs.aws.amazon.com/polly/latest/dg/what-is.html) service to announce the tracks 
recently 
played, similar to what a live radio show would do. It also announces the 
time and the local weather forecast based on configuration parameters.

Sound on! 👇

https://user-images.githubusercontent.com/341543/150606047-1e7fee44-5185-4dc3-94f3-e4dfa0cba574.mp4

## Table of Contents

- [1. Getting Started](#1-getting-started)
  - [1.1 Prerequisites](#1.1-prerequisites)
  - [1.2 Installing](#1.2-building-and-installing)
- [2. Built With](#2-built-with)
- [3. Credits and Community](#3-credits-and-community)
- [4. Donations](#4-donations)
- [5. License](#5-license)

## 1. Getting Started

These instructions will get you a copy of the project up and running on your 
local machine.


### 1.1 Prerequisites

You'll need Node installed on your machine, the best way to install/manage 
Node versions is to use Volta:

- [Volta](https://github.com/volta-cli/volta) - the hassle-free JavaScript 
  tool manager

You also need to follow the installation instructions for Spicetify:

- [spicetify-cli](https://spicetify.app/docs/getting-started/advanced-installation) - command line
    tool to customize Spotify client.

### 1.2 Building and Installing

The steps below assume you have successfully installed Spicetify.

Spicetify Announcer requires an AWS account and setting up the AWS Polly 
following the [Getting Started](https://docs.aws.amazon.com/polly/latest/dg/setting-up.html) guide. Once you have AWS 
configured follow the steps below:

1. tweak the `config.js` entries for AWS and OpenWeather. At a minimum 
you'll have to update the following values:

- `AWS_REGION`
- `AWS_IDENTITY_POOL_ID`
- `OPENWEATHER_CITY`
- `OPENWEATHER_TOKEN`

2. Then build the extension with your changes by running the build script. You 
should see something similar to:

```
$ npm run build

> spicetify-announcer@1.0.0 build ~/spicetify-announcer
> esbuild src/index.js --bundle --outfile=build/SpicetifyAnnouncer.js


  build/SpicetifyAnnouncer.js  501.9kb

⚡ Done in 70ms
```

3. copy your build to the `/spicetify/Extensions` folder in 
your system. (NOTE: your folder might be in a different location 
depending on your system)

```
$ cp ./build/SpicetifyAnnouncer.js ~/.config/spicetify/Extensions

cp: overwrite '~/.config/spicetify/Extensions/SpicetifyAnnouncer.js'? y

```

4. run the `spicetify apply` command to apply your changes:

```
$ ~/spicetify-cli/spicetify apply

spicetify v2.8.4
Overwriting raw assets:
OK
Transferring user.css:
OK
Applying additional modifications:
OK
Transferring extensions:
OK
success Spotify is spiced up!
```

5. Update `~/.config/config-xpui.ini` to include SpicetifyAnnouncer.js in the 
   extensions line, you only need to do this once. (NOTE: your file might be in a different location depending on your system)

```
[AdditionalOptions]
extensions            = SpicetifyAnnouncer.js
```

You should now be able to start your Spotify client and announcements should 
work!

## 2. Built With

- [aws-sdk-js-v3](https://github.com/aws/aws-sdk-js-v3) - modularized AWS 
  SDK for JavaScript.

- [spicetify-cli](https://github.com/khanhas/spicetify-cli) - command line
  tool to customize Spotify client.
  
- [tinytime](https://github.com/aweary/tinytime) - a straightforward date
  and time formatter in < 800b.

- [OpenWeather API](https://openweathermap.org/api) - free weather data APIs.

## 3. Credits and Community

This project exists thanks to all the <a href="https://github.com/rlueder/tidytweets/graphs/contributors">people who contribute</a>.

- [Rafael Lüder](https://github.com/rlueder)

## 4. Donations

Spicetify Announcer is free and open-source software, if you find it useful 
[consider buying 
me a coffee](https://www.buymeacoffee.com/rlueder). Thanks!

## 5. License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

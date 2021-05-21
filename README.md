# ableton-hue-record
Set Philips Hue color to red when Ableton recording.

## 🖼️ Preview
[TO DO]

## 🛠️ Installation

```
git clone git@github.com:JeromeDevillers/ableton-hue-record.git
cd ableton-hue-record
npm i
node index.js
```

## 🔨 Configuration
Copy the `.env.example` and rename it `.env`
```
HUE_BRIDGE_IP=
HUE_USERNAME=
HUE_LIGHT_ID=
```
1. First you need to find your **Philips Hue Bridge IP**.<br> For that you can use this url https://discovery.meethue.com/. <br>
You will find the IP on `internalipaddress` param.

2. Press the link button on the bridge.

3. Then you need to create a username to use the **Philips Hue API**. <br>Go to https://`<bridge ip address>`/debug/clip.html and fill the form like this :

4. You should see a username value like `1028d66426293e821ecfd9ef1a0731df`. <br>Copy this to the `.env` file.

| param |value |
|-----|----|
| URL| /api |
| Body | {"devicetype":"my_hue_app#yourname"} |
| Method | Post |




## Dependencies
| Name | URL |
|-------|-----|
| Dotenv | https://www.npmjs.com/package/dotenv |  
| Axios | https://www.npmjs.com/package/axios |
| Ableton-push2 | https://www.npmjs.com/package/ableton-push2 |


## 👥 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
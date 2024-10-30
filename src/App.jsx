import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt"

function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(
  url = window.location.href
) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}


function App() {
  const Meeting = (element) => {
   const roomID = getUrlParams().get('roomID') || randomID(5),
         appID = 364859893,
         serverSecret = "5984658843796b0fce47152a4c9c30f0";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      randomID(5),
      randomID(5)
    );

    const meetKit = ZegoUIKitPrebuilt.create(kitToken);
    if(meetKit){
      meetKit.joinRoom({
        container:element,
        sharedLinks: [
          {
            name: 'Vast Agency Share Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
          
        ],
        scenario:{
            mode: ZegoUIKitPrebuilt.GroupCall
        }
      })
    }
  };

  return <div ref={Meeting}
    ClassName="kit-container"></div>;
}

export default App

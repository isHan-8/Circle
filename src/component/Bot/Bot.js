import React, { useEffect } from 'react';

export default function Bot() {

  useEffect(() => {
    // <script type="text/javascript">
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"1e085053be053d5ee9f5752a17be22271","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
    /* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
    {/* </script> */}
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  return (
    // <h1> hell oo this is the new k j </
    <>
    </>
  );
}

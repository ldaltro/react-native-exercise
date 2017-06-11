import React, { View, WebView } from 'react-native';
import s from 'string';

const firstHtml = '<html><head><style>html, body { margin:0; padding:0; overflow:hidden } svg { position:fixed; top:0; left:0; height:100%; width:100% }</style></head><body>';
const lastHtml = '</body></html>';

const SVGImage = (props) =>
  <View style={props.containerStyle}>
    <WebView
      style={[{ width: 200, height: 100, backgroundColor: props.backgroundColor }, normalizeStyle(props.style)]}
      scrollEnabled={false}
      source={{ html: `${firstHtml}${props.svgContent}${lastHtml}` }}
    />
  </View>;

export default SVGImage;
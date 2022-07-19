const Text = ({ className, text, isTemperature = false, fontSize, fontColor }) => {
   if (isTemperature) {
      return (
         <div
            className={className}
            style={{
               fontSize: fontSize ? fontSize : '',
               color: fontColor ? fontColor : '',
            }}
         >
            {text} &#8457;
         </div>
      );
   } else {
      return (
         <div
            className={className}
            style={{
               fontSize: fontSize ? fontSize : '',
               color: fontColor ? fontColor : '',
            }}
         >
            {text}
         </div>
      );
   }
};

export default Text;


"use client"
import { useRouter } from "next/navigation";
TODO:// we pass classesPlusText in classname variable and clases are in string so in object
//  we pass as a return type ..... we receive classes and inner text of button
interface receiveClass{
    className:String,
    text:String
}
export default  function BackButton(classesPlusText:receiveClass) {
    let incomingClasses=classesPlusText.className
    let incomingText = classesPlusText.text
  const router = useRouter();
    return  (
        <button  className={`${incomingClasses}`} onClick={() => router.back()}>{incomingText}</button>
    )
}
import { useEffect, useState } from "react"

interface HomePageInputFieldProps {
    onSubmit: React.Dispatch<React.SetStateAction<string>>
    style: string
    placeholder: string
}

export function HomePageInputField(props: HomePageInputFieldProps){
    const [text, setText] = useState("")

    useEffect(() => {
        const listener = (event: KeyboardEvent) => {
          if (event.code === "Enter" || event.code === "NumpadEnter") {
            props.onSubmit(text)
          }
        };
        document.addEventListener("keydown", listener)
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, [text]);

    const inputOnChangeHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const input = event.currentTarget.value
        setText(input)
    }

    return(
        <input type="text" className={props.style}
            placeholder={props.placeholder} 
            name="searchInput"
            onChange={inputOnChangeHandle}/>
    )
}
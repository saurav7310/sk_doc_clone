import React, { useCallback } from 'react'
import Quill from 'quill'
import "quill/dist/quill.snow.css"

const toolbar_options = [
    [{header: [1,2,3,4,5,6, false]}],
    [{font: []}],
    [{list: 'ordered'}, {list: 'bullet'}],
    ["bold", "italic", "underline"],
    [{color: [], background: []}],
    [{script: 'sub'}, {script: 'super'}],
    [{align: []}],
    ['image','code-black'],
    ['clean'],
]

const TextEditor = () => {

    const wrapperRef = useCallback((wrapper)=>{
        if(wrapper == null) return

        wrapper.innerHTML = ""
        const editor = document.createElement('div')
        wrapper.append(editor)
        new Quill(editor, {theme: 'snow', modules: {toolbar: toolbar_options}})
    }, [])
  return (
    <>
        <div style={{backgroundColor: '#f9fbfd'}} className='container' ref={wrapperRef}></div>  {/* the parent container of the entire text editor and the toolbar */}
    </>
  )
}

export default TextEditor
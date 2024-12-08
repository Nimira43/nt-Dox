'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

export const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>nt-Dox</p>',
  })
  return (
    <div className='size-full overflow-x-auto bg-[#f87144] px-4 print:p-0 print:bg-[#fff] print:overflow-visible'>
      <div className='min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0'>
        <EditorContent editor={editor}/>
      </div>
    </div>
  )
}
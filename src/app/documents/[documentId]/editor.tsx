'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import StarterKit from '@tiptap/starter-kit'

export const Editor = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        style: 'padding-left: 50px; padding-right: 56px;',
        class: 'focus:outline-none print:border-0 bg-[#fff] border border-[#ccc] flex flex-col min-h-[1054px] w-[816px] pt-10 pr-14 pb-10 cursor-text'
      },
    },
    extensions: [
      StarterKit,
      TaskItem.configure({
        nested: true,
      }) ,
      TaskList,
    ],
    content: '<p>nt-Dox</p>',
  })
  return (
    <div className='size-full overflow-x-auto bg-[#ececec] px-4 print:p-0 print:bg-[#fff] print:overflow-visible'>
      <div className='min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0'>
        <EditorContent editor={editor}/>
      </div>
    </div>
  )
}
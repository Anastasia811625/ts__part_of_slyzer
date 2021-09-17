import React, { FC, useState } from 'react';
import { Container, Paper } from '@material-ui/core';
import { useDrop } from 'react-dnd';
import { NativeTypes } from "react-dnd-html5-backend";

type fileType = {
  lastModified: number
  lastModifiedDate: object
  name: string
  size: number
  type: string
  webkitRelativePath: string
}

export const UploadFile: FC = (): JSX.Element => {
  const [fileList, setFileList] = useState<fileType[]>([])

  // const uploadFileFunc = (e: <React.FormEvent<HTMLFormElement> | React.DragEvent>) => {
  const uploadFileFunc = (e: any) => {
    console.log('e.type', typeof e)
    const value = e.target ? e.target.files : e.files
    setFileList([...fileList, ...value])
  }

  const [, drop] = useDrop(
    () => ({
      accept: [NativeTypes.FILE],
      drop(item) {
        uploadFileFunc(item);
      },
    }),
    [uploadFileFunc]
  )

  return (
    <div ref={drop} style={{ height: '95vh' }}>
      <Container>
        <Paper>
          <form>
            <input type='file' onChange={(e) => {
              uploadFileFunc(e)
            }} />
            {fileList.length ? fileList.map((el: fileType) => {
              return (<p>{el.name}</p>)
            }) : null}
          </form>
        </Paper>
      </Container>
    </div>
  )
}

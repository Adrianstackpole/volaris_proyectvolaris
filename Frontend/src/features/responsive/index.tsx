import { useState } from 'react'

import { Document, Page, pdfjs } from 'react-pdf'
import { useParams } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { Download, Send } from 'lucide-react'

import { BACKEND_API_URL } from '@/lib/api'

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`

type FILE_STATES_TYPES = 'LOADING' | 'ERROR' | 'LOADED'

const Responsive = () => {
  const { id } = useParams()
  const [fileState, setFileState] = useState<FILE_STATES_TYPES>('LOADING')
  const [pageNumber] = useState<number>(1)

  const onLoadSuccess = () => {
    setFileState('LOADED')
  }

  return (
    <div className='pb-10'>
      {fileState === 'LOADING' && <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-slate-800 mx-auto" />}
      <Document onLoadSuccess={onLoadSuccess} file={`${BACKEND_API_URL}/responsives/${id}.pdf`} className='flex justify-center bg-none'>
        <Page pageNumber={pageNumber} height={1200} />
      </Document>
      <div className='flex justify-center mt-5 gap-5'>
        <Button disabled={fileState !== 'LOADED'}>
          <Send />
          Envíar
        </Button>
        <Button disabled={fileState !== 'LOADED'}>
          <Download />
          Descargar
        </Button>
      </div>
    </div>
  )
}

export default Responsive

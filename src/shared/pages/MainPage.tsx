import { Fragment } from "react/jsx-runtime"
import { KanbanPage } from "../../kanban/pages/KanbanPage"

export const MainPage: React.FC = () => {
  return (
    <Fragment>
    <div className='grid min-h-dvh grid-rows-[auto_1fr_auto]'>
      <header className='bg-orange-300'>Header</header>
      <div className='bg-slate-900'><KanbanPage/></div>
      <footer className='bg-lime-200'> Footer</footer>
    </div>
  </Fragment>
  )
}

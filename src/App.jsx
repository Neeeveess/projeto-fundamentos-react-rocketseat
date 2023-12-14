
import { Header } from './components/Header'
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import  styles from "./App.module.css";
import './global.css'


function App() {  
  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author='João Vitor'
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam blanditiis culpa! Voluptate, autem cumque? Sed ullam dolorum illum laborum, culpa temporibus suscipit quae ad laboriosam hic omnis quo a.'
          />

          <Post 
            author='Jorge'
            content='Post legal maneiro e demais'
          />
          
        </main>
      </div>
    </div>
  )
}

export default App

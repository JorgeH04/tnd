import Card from '../components/Card'
import Header from '../components/Header'

const style = {
  wrapper: `h-screen w-screen flex flex-col bg-[#222229]`,
  cardsContainer: `flex flex-col items-center justify-center flex-1`,
}
export default function Home() {
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.cardsContainer}>
        <Card />
      </div>
    </div>
  )
}

//0x5A274941E8a51657378d68c1b1Fce540121c38B7
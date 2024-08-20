import Categories from "./(shop)/categories/page"
import Product from "./(shop)/products/page"
import Profile from "./(user)/profile/page"
import Setting from "./(user)/setting/page"
export default function page() {
  return (
    <div>
        <Categories />
        <Product />
        <Profile />
        <Setting />
    </div>
  )
}

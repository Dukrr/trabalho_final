import axios from 'axios'
import Link from 'next/link'


 function Products({products}) {
  return (
<div>


	<header className='header-position'>
		<a className="logo">Pato Store</a>
		<div className="bx bx-menu" id="menu-icon"></div>

		<ul className="navbar">
			<li><a href="#shop">Shop</a></li>
			<li><a href="#about">About</a></li>
			<li><a href="#faq">Faq</a></li>
			<li><a href="#contact">Contact</a></li>
		</ul>

		<div className="icons">
			<a href="#"><i className='bx bx-search'></i></a>
			<a href="#"><i className='bx bxs-user-circle' ></i></a>
			<a href="#"><i className='bx bxs-shopping-bag' ></i></a>
		</div>
	</header>

	<section className="shop" id="shop">
		<div className="container">

      {
        products.map((detail)=>(
          <div className="box" key={detail.id}>
          <img src={detail.image}/>
          <h4>{detail.title}</h4>
          <h5>${detail.price}</h5>
          <div className="cart">
            <Link href="/detail/[id]" as={`/detail/${detail.id}`}><i className='bx bx-cart' ></i></Link>
          </div>
        </div>
        ))
      }

		</div>
	</section>


	<section className="about" id="about">
		<div className="about-content">
			<h2>About</h2>
			<p>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
		</div>
	</section>


	<section className="contact" id="contact">
		<div className="main-contact">
			<div className="contact-content">
				<li><a href="#shop">Shop</a></li>
			  <li><a href="#about">About</a></li>
			  <li><a href="#faq">Faq</a></li>
			  <li><a href="#contact">Contact</a></li>
			</div>

			<div className="contact-content">
				<li><a href="#">Shipping & Returns</a></li>
				<li><a href="#">Store Policy</a></li>
				<li><a href="#">Payment Methods</a></li>
			</div>

			<div className="contact-content">
				<li><a href="#">Contact</a></li>
				<li><a href="#">Tel: 123-456-7890</a></li>
			</div>

			<div className="contact-content">
				<li><a href="#">Facebook</a></li>
				<li><a href="#">Instagram</a></li>
				<li><a href="#">Pinterest</a></li>
			</div>

		</div>

		<div className="action">
			<form>
				<input type="email" name="email" placeholder="Your Email" required/>
				<input type="submit" name="submit" value="Submit" required/>
			</form>
		</div>
	</section>

	<div className="last">
		<p>© 2023 by Tahmid. Proudly created with Tahmid Ahmed</p>
		</div>
</div>
  )
}

export async function getStaticProps(context){

  const response= await axios.get(
    'https://fakestoreapi.com/products'
  );
  const data = await response.data;
  return {
    props: {products:data},
  }
  
}

export default Products;
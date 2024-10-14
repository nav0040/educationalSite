import React from 'react'

const categories =[
    { name:"About Us",link:'#'},
    { name:'How We Help',link:"#trending"},
    { name:"Pricing",link:"#destinations"},
    { name:'Portfolios',link:'#portfolios'},
    { name:'Testimonials',link:'#testimonial'},
    { name:'Insights',link:'#insights'},


]
const Header = () => {
    const [visible, setVisible] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [id, setId] = useState('home');
  return (
    <div>Header</div>
  )
}

export default Header
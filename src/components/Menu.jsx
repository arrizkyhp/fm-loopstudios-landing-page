import PropTypes from 'prop-types'

const Menu = (props) => {
    const data = props.data;
    const className = [props.className];
    
    return (
    <ul className={` ${className.join(" ")} text-white font-alata md:flex text-default font-normal`}>
        {data.map((link) => {
        return (
            <li className='relative hover:after:content-[""]  hover:after:w-6 hover:after:h-[2px] hover:after:absolute hover:after:-bottom-2 hover:after:left-0 hover:after:right-0 hover:after:mx-auto hover:after:bg-white' key={link.id}><a href={link.url}>{link.name}</a></li>
        )
        })}
    </ul>
    )
}

Menu.propTypes = {
    className: PropTypes.string,
    data: PropTypes.array,
  }

export default Menu

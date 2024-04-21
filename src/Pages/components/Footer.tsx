import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons'

function Footer() {
    return (
        <footer className='backdrop-blur-md text-white text-center p-4'>
            <a href="https://github.com/B3ni15" className='p-5'>
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/b3ni.ballo/" className='p-5'>
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://discord.gg/ZhSfE77nMB" className='p-5'> 
                <FontAwesomeIcon icon={faDiscord} />
            </a>
            

            <p>© 2024 Speed Ball</p>
            <p>Created by <span className='text-blue-400'>Balló Benedek</span></p>
        </footer>
    )
}

export default Footer
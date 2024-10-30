import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import CloudRoundedIcon from '@mui/icons-material/CloudRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

function MiddleBar (){  
    return (
        <div className="grid grid-cols-4 w-100% bg-gray-10h p-10 flex">
            <section className='col-span-1 gap-5 flex'>
                <PublicRoundedIcon className='bg-green-600 p-1 rounded-2'/>
                <span>
                <h1  className='text-bold , large'>Our Vision</h1>
                <p className='text-gray-400 ,bold ,large'>To be a university of global excellence, metting the dynamic needs and development of society</p>
                </span>
            </section>
            <section className='col-span-2 gap-5 flex'>
                <CloudRoundedIcon className='bg-green-600 p-1 rounded-2'/>
                <span>
                <h1 className='text-bold , large' >Our Mission</h1>
                <p className='text-gray-400 ,bold ,large'>To conserve, create and disseminate knowledge through training, research, innovation and community ourach</p>
                </span>
            </section> 
            <section className='col-span-3 gap-5 flex'>
                <EditRoundedIcon className='bg-green-600 p-1 rounded-2'/>
                <span>
                <h1 className='text-bold , large' >Our Programs</h1>
                <p className='text-gray-400 ,bold ,large'>Undergraduate, Masters and PhD</p>
                </span>
            </section>
            <section className='col-span-4 gap-5 flex'>
                <HomeRoundedIcon className='bg-green-600 p-1 rounded-2'/>
                <span>
                <h1 className='text-bold , large' >Main Campus</h1>
                <p className='text-gray-400 ,bold ,large'>Karatina University is situated 15km North of Karatina townat Kagochi, Karatina, Nyeri county </p>
                </span>
            </section>
            
        </div>
    )
}
export default MiddleBar
import {
    BsPeopleFill,
    BsKeyFill,
    BsListCheck,
    BsReverseLayoutTextSidebarReverse,
} from 'react-icons/bs';

function Biens() {
    return (
        <main className="container mx-auto p-4">
            <div className="bg-blue-500 rounded-md text-white text-center py-2 mb-4">
                <h3 className="text-xl font-semibold">BIENS</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-md overflow-hidden shadow-md p-4">
                    <h3 className="text-lg font-semibold mb-2">LOCATAIRES</h3>
                    <BsPeopleFill className="text-4xl text-blue-500" />
                </div>
                <div className="bg-white rounded-md overflow-hidden shadow-md p-4">
                    <h3 className="text-lg font-semibold mb-2">LOCATIONS</h3>
                    <BsKeyFill className="text-4xl text-blue-500" />
                </div>
                <div className="bg-white rounded-md overflow-hidden shadow-md p-4">
                    <h3 className="text-lg font-semibold mb-2">RESERVATION</h3>
                    <BsListCheck className="text-4xl text-blue-500" />
                </div>
                <div className="bg-white rounded-md overflow-hidden shadow-md p-4">
                    <h3 className="text-lg font-semibold mb-2">CARNET</h3>
                    <BsReverseLayoutTextSidebarReverse className="text-4xl text-blue-500" />
                </div>
            </div>
        </main>
    )
}

export default Biens
import Header from "../components/Header"


function checkout() {
    return (
        <div className="bg-gray-100">
            <Header/>
            <main>
                {/* left */}
                <div>
                    <Image src="https://links.papareact.com/ikj" width={300} height={250} objectFit="contain"/>
                </div>
            </main>
        </div>
    )
}

export default checkout

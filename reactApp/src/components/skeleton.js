function Skeleton() {
    const {useState, useEffect} = React
    let [data, setData] = useState({})
    useEffect(() => {
        getData().then(res => setData(res))
    }, []);
    console.log('skl', data)
    return (
        <page className="container A4 page">
            <div className="flex-container flex-col flex-center">
                <div className='row'>
                    <TopBar address={data.address}
                            email={data.email}
                            phoneNumber={data.phoneNumber}
                    />
                </div>
                <div className='row'>
                    <div className="container-fluid flex-container flex-row flex-center">
                        <NameBox
                            name={data.name}
                            jobTitle={data.jobTitle}
                            description={data.jobDescription}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className='row align-self-stretch'>
                        <div className='row'>
                            <LeftBar/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="container-fluid mt-4">
                            <MainContent
                                employments={data.employments}
                                educations={data.educations}
                                certificates={data.certificates}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </page>
    )
}
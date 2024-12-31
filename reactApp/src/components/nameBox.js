function NameBox({name, jobTitle, description}) {
    return (
        <div>
            <div className="container-fluid flex-container flex-row flex-center">
                <div className="d-inline-block mr-5 flex-md-grow-1">
                    <div className="flex-container flex-col flex-center ">
                        <span className="h1 mt-3 d-block t-shadow-right">{name}</span>
                        <span className="h5 mt-0 d-block t-shadow-right">{jobTitle}</span>
                        <span className="h5 mt-0 d-block t-shadow-right">{description}</span>
                    </div>
                </div>
                <img className="mt-2 ml-5 " src="./../changedBg-rtl-blured-whiteBG.png" height="200px" alt="image"/>
            </div>
        </div>
    )
}
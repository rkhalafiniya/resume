function Employment({employment}) {
    return (
        <div>
            <h6 className="card-subtitle mt-3 text-muted">{employment.from} - {employment.to}</h6>
            <h4 className="font-weight-bold">{employment.company}</h4>
            <h5>{employment.title}</h5>
            <p>
                {employment.tasks && employment.tasks.map((task) => {
                        return (
                            <div><i className="green inline-icon material-icons material-icons-outlined">done</i>{task}
                            </div>
                        )
                    }
                )}
            </p>
        </div>
    )
}
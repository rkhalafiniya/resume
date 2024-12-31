function TopBar({address,email,phoneNumber}) {
    return (
            <div
                className="flex-container flex-row flex-between cborder border-round border-blue border-thick border-top-0 ">
			<span className="ml-5 mr-5">
				<i className="inline-icon material-icons material-icons-outlined">home</i>
				<span>{address}</span>
			</span>
                <span className="ml-5 mr-5">
				<i className="inline-icon  material-icons material-icons-outlined">mail_outline</i>
				<span>{email}</span>
			</span>

                <span className="ml-5 mr-5">
				<i className="inline-icon material-icons material-icons-outlined">phone_android</i>
				<span>{phoneNumber}</span>
			</span>
            </div>
    )
}
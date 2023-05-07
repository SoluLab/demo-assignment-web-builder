import useInsertComponent from '../Context/InserComponent/useInsertComponent'
import { toggleSidebar } from '../api_utils/geditor_utils'

function TopNav() {
	const { SelectedTab, setSelectedTab } = useInsertComponent()
	const handleClick = () => {
		toggleSidebar(false)
	}
	return (
		<nav className="navbar navbar-light" id="topBar">
			<div>
				<label className="listItem">
					<i className="fa fa-medium" aria-hidden="true"></i>
				</label>
				<label
					onClick={() => setSelectedTab('insert')}
					className={` ${
						SelectedTab === 'insert' && 'listactive'
					} listItem`}
				>
					<i className="fa fa-plus-square" aria-hidden="true"></i>
					Insert
				</label>
				<label
					className={` ${
						SelectedTab === 'layout' && 'listactive'
					} listItem`}
					onClick={() => setSelectedTab('layout')}
				>
					<i className="fa fa-th-large" aria-hidden="true"></i>
					Layout
				</label>
				<label className="listItem">
					<i className="fa fa-text-width" aria-hidden="true"></i>
					Text
				</label>
				<label className="listItem">
					<i className="fa fa-database" aria-hidden="true"></i>
					CMS
				</label>
			</div>

			<span className="activeTmplt">Untitled</span>

			<div>
				<label className="listItem">
					<i className="fa fa-play itemBtn" aria-hidden="true"></i>
				</label>
				<label className="listItem">
					<span className="itemBtn">Invites</span>
				</label>
				<label className="listItem">
					<span className="itemBtn publish">Publish</span>
				</label>
				<label className="listItem">
					<i className="fa fa-cog itemBtn" aria-hidden="true"></i>
				</label>
				<label className="listItem">
					<span className="msBox">MS</span>
				</label>
			</div>
			{/* <div className="container">
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={handleClick}
        >
          <i className="fa fa-bars"></i>
        </button>
        <div className="panel__devices"></div>
        <div className="panel__editor"></div>
        <div className="panel__basic-actions"></div>
      </div> */}
		</nav>
	)
}

export default TopNav

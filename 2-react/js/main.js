// @ts-nocheck
class App extends React.component {
	constructor() {
		super();

		this.state = {
			searchKeyword: "",
		};
	}
	render() {
		return (
			<>
				<header>
					<h2 className="container">검색</h2>
				</header>
				<div className="container">
					<form id="search-form-view">
						<input
							type="text"
							placeholder="검색어를 입력하세요"
							autoFocus
							value={this.state.searchKeyword}
						/>
						<button type="reset" className="btn-reset"></button>
					</form>
				</div>
			</>
		);
	}
}

ReactDom.render(<App />, document.querySelector("#app"));

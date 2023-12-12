// @ts-nocheck
class App extends React.component {
	constructor() {
		super();

		this.state = {
			searchKeyword: "",
		};
	}

	handleChangeInput(event) {
		// TODO
		// this.state.searchKeyword = event.target.value;
		// this.forceUpdate();

		// 컴포넌트 상태 변화 약속
		this.setState({
			searchKeyword: event.target.value,
		});
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
							// TODO
							onChange={(event) => this.handleChangeInput(event)}
						/>
						<button type="reset" className="btn-reset"></button>
					</form>
				</div>
			</>
		);
	}
}

ReactDom.render(<App />, document.querySelector("#app"));

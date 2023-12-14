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

		const searchKeyword = event.target.value;

		// 컴포넌트 상태 변화 약속
		this.setState({ searchKeyword });
	}
	render() {
		// let resetButton = null;

		// if (this.state.searchKeyword.length > 0) {
		// 	resetButton = <button type="reset" className="btn-reset"></button>;
		// }

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
						{this.state.searchKeyword.length > 0 && (
							<button type="reset" className="btn-reset"></button>
						)}
					</form>
				</div>
			</>
		);
	}
}

ReactDom.render(<App />, document.querySelector("#app"));

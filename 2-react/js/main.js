// @ts-nocheck
class App extends React.component {
	render() {
		return (
			<>
				<header>
					<h2 className="container">검색</h2>
				</header>
				<div className="container">
					<form id="search-form-view">
						<input type="text" placeholder="검색어를 입력하세요" autoFocus />
						<button type="reset" className="btn-reset"></button>
					</form>
				</div>
			</>
		);
	}
}

ReactDom.render(<App />, document.querySelector("#app"));

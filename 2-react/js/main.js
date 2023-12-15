// @ts-nocheck
class App extends React.component {
	constructor() {
		super();

		this.state = {
			searchKeyword: "",
			searchResult: [],
		};
	}

	handleSubmit(event) {
		// TODO
		event.preventDefault();
		console.log(event, this.state.searchKeyword);
	}

	handleReset() {
		this.setState({ searchKeyword: "" });

		this.setState(
			() => {
				return { searchKeyword: "" };
			},
			() => {
				console.log("TODO: handleReset", this.state.searchKeyword);
			}
		);
	}

	handleChangeInput(event) {
		// TODO
		const searchKeyword = event.target.value;

		if (searchKeyword.length <= 0) {
			this.handleReset();
		}

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
					{/* TODO */}
					<form
						id="search-form-view"
						onSubmit={(event) => this.handleSubmit(event)}
						onChange={() => this.handleReset()}
					>
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
					<div className="content">
						{
							/* TODO */
							this.state.searchResult.length > 0 ? (
								<ul>
									{this.state.searchResult.map((item) => {
										return (
											<li>
												<img src={item.imageUrl} alt={item.name} />
												<p>{item.name}</p>
											</li>
										);
									})}
								</ul>
							) : (
								<div className="empty-box">검색 결과가 없습니다</div>
							)
						}
					</div>
				</div>
			</>
		);
	}
}

ReactDom.render(<App />, document.querySelector("#app"));

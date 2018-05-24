import Box from './boxes';

export default class Game {
	constructor(props) {
		this.canvas = document.getElementById('canvas');
		this.context = this.canvas.getContext('2d');
		this.boxSize = 20;
		this.props = props;
		this.timeout = undefined;
		this.boxesId = 0;
		this.render();
		this.detectBox();
	}
	getColor() {
		let letters = '0123456789ABCDEF',
			color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}
	getSpeed() {
		return Math.floor(Math.random() * (4 - 1) + 1);
	}
	getDuration() {
		return Math.floor(Math.random() * 1000);
	}
	getMargin() {
		return Math.floor(Math.random() * (this.canvas.clientWidth - this.boxSize));
	}
	createBox() {
		let boxOptions = {
				color: this.getColor(),
				speed: this.getSpeed(),
				margin: this.getMargin(),
				id: this.boxesId
			},
			duration = this.getDuration(),
			box = new Box(boxOptions, this.props);
		this.props.addBox({id: this.boxesId, box: box});
		this.boxesId += 1;
		this.timeout = setTimeout(function () {
			this.createBox();
		}.bind(this), duration);
	}
	render() {
		this.context.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
		for (let key in this.props.eventList.boxCollection) {
			this.props.eventList.boxCollection[key].animate();
		}
		requestAnimationFrame(this.render.bind(this));
	}
	detectBox() {
		this.canvas.addEventListener('click', function (event) {
			let x = event.offsetX,
				y = event.offsetY,
				detectedBox;
			for (let key in this.props.eventList.boxCollection) {
				detectedBox = this.props.eventList.boxCollection[key].detect(x, y);
				if (detectedBox) {
					this.props.removeBox(detectedBox.id);
					this.addPoint();
				}
			}
		}.bind(this));
	}
	addPoint() {
		this.props.addPoint();
	}
	dropGame() {
		this.props.dropPoint();
		this.props.dropCollection();
	}
	start() {
		this.stop();
		this.createBox();
	}
	stop() {
		this.dropGame();
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
		this.context.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
	}
};
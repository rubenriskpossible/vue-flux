import DomHelper from '@/classes/DomHelper.js';

export default class DisplayController {

	constructor(vm) {
		this.vm = vm;

		this.size = {
			width: undefined,
			height: undefined,
		};
	}

	setSize(size) {
		this.size = {
			...this.size,
			...size,
		};
	}

	static getSizeFrom(element) {
		element = new DomHelper(element);

		return element.getSize();
	}

	setSizeFrom(element) {
		this.size = DisplayController.getSizeFrom(element);
	}

	inFullScreen() {
		let props = [
			'fullscreenElement',
			'webkitFullscreenElement',
			'mozFullScreenElement',
			'msFullscreenElement',
		];

		return document[props.find(prop => prop in document)];
	}

	requestFullScreen(element) {
		let methods = [
			'mozRequestFullScreen',
			'webkitRequestFullscreen',
			'requestFullscreen',
			'msRequestFullscreen',
		];

		methods.find((method) => {
			return method in element? element[method]() || true : false;
		});

		this.vm.$emit('vf-enter-fullscreen', this.vm);
	}

	exitFullScreen() {
		let methods = [
			'exitFullscreen',
			'mozCancelFullScreen',
			'webkitExitFullscreen',
			'msExitFullscreen',
		];

		methods.find((method) => {
			return method in document? document[method]() || true : false;
		});

		this.vm.$emit('vf-exit-fullscreen', this.vm);
	}

}

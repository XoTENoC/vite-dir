class MixerPlayer {
	private mixerContainer: HTMLElement;
	private timeline: HTMLElement;
	private playBtns: NodeListOf<HTMLElement>;
	private audioPlayers: NodeListOf<HTMLAudioElement>

	private isPlaying: boolean = false;
	private isLoading: boolean = false;
	private currentTrackNumber: number = 0;
	private currentTime: number = 0;
	private sectionLength: number = 761;


	constructor(El: HTMLElement) {
		this.mixerContainer = El;

		this.init();
	}

	private init() {
		this.timeline = this.mixerContainer.querySelector<HTMLElement>(".js-mixer-player-timeline");
		this.playBtns = this.mixerContainer.querySelectorAll<HTMLElement>(".js-mixer-player-btn");
		this.audioPlayers = this.mixerContainer.querySelectorAll("audio");

		this.setupEvents();
		this.setupAudioEvents();
	}

	private setupEvents() {
		this.playBtns.forEach(btn => {
			const trackID = +btn.dataset.track;

			btn.addEventListener("click", () => {
				this.stopAllTracks();

				if (trackID === this.currentTrackNumber) {
					this.currentTrackNumber = 0;
					return;
				}

				this.playTrack(trackID);
			});

		})
	}

	private setupAudioEvents() {
		this.audioPlayers.forEach(player => {
			player.addEventListener("timeupdate", () => {
				if (player.readyState === 4) {
					this.changeLoadState(false);
				}

				this.currentTime = +player.currentTime.toFixed(2);
				this.timeline.style.transform = `translateX(-${(761/77) * this.currentTime}px)`;
			});
		});
	}

	private stopAllTracks(){
		this.audioPlayers.forEach(player => {
			player.pause();
		});

		this.isPlaying = false;
	}

	private playTrack(trackID: number){
		this.audioPlayers.forEach(player => {
			const playerID = +player.dataset.track;

			if (playerID === trackID) {
				player.play();
				this.isPlaying = true;

				player.currentTime = this.currentTime;

				this.changeLoadState(true);

				this.currentTrackNumber = playerID;
			}
		})
	}

	private changeLoadState(isLoading: Boolean) {
		this.playBtns.forEach(btn => {
			if(isLoading) {
				btn.classList.add("is-disabled");
			} else {
				btn.classList.remove("is-disabled");
			}
		})
	}å
}

class fooClass {
	constructor() {
		const holder = document.querySelector<HTMLElement>(".js-mixer-player");
		window.addEventListener("load", () => {
			new MixerPlayer(holder);
		});
	}
}

new fooClass();

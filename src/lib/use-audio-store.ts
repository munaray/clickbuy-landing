import { create } from "zustand";
import { Howl } from "howler";

interface AudioState {
	playClickSound: () => void;
}

export const useAudioStore = create<AudioState>(() => ({
	playClickSound: () => {
		const clickSound = new Howl({
			src: ["/click.mp3"],
			volume: 0.8,
		});
		clickSound.play();
	},
}));

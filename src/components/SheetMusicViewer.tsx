"use client";

import React, { useEffect, useRef, useState } from 'react';
import { OpenSheetMusicDisplay } from 'opensheetmusicdisplay';
import AudioPlayer from 'osmd-audio-player';

interface SheetMusicViewerProps {
  file: string;
}

export default function SheetMusicViewer({ file }: SheetMusicViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [osmd, setOsmd] = useState<OpenSheetMusicDisplay | null>(null);
  const [audioPlayer, setAudioPlayer] = useState<AudioPlayer | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioReady, setAudioReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Initialize OSMD
    const osmdInstance = new OpenSheetMusicDisplay(containerRef.current, {
      autoResize: true,
      drawTitle: true,
      drawSubtitle: true,
      drawComposer: true,
      drawLyricist: true,
      drawCredits: true,
      drawPartNames: true,
      drawPartAbbreviations: true,
      drawMeasureNumbers: true,
      drawMeasureNumbersOnlyAtSystemStart: true,
    });

    setOsmd(osmdInstance);

    return () => {
      // Cleanup
      if (audioPlayer) {
        audioPlayer.stop();
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (osmd && file) {
      setLoading(true);
      osmd.load(file).then(async () => {
        osmd.render();
        
        // Initialize Audio Player after OSMD is rendered
        const player = new AudioPlayer();
        setAudioPlayer(player);
        
        try {
          await player.loadScore(osmd);
          setAudioReady(true);
        } catch (audioErr) {
          console.error("Audio Player failed to load score:", audioErr);
        }

        player.on("state-change", (state) => {
          setIsPlaying(state === "PLAYING");
        });

        setLoading(false);
      }).catch((err) => {
        console.error("Error loading sheet music:", err);
        setLoading(false);
      });
    }
  }, [osmd, file]);

  const togglePlay = () => {
    if (!audioPlayer) return;
    if (isPlaying) {
      audioPlayer.pause();
    } else {
      audioPlayer.play();
    }
  };

  const stopPlay = () => {
    if (!audioPlayer) return;
    audioPlayer.stop();
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex justify-center gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow-sm">
        <button
          onClick={togglePlay}
          disabled={!audioReady || loading}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors flex items-center justify-center min-w-[120px]"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button
          onClick={stopPlay}
          disabled={!audioReady || loading || !isPlaying}
          className="px-6 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-colors"
        >
          Stop
        </button>
      </div>

      <div className="w-full bg-white text-black p-4 rounded-xl shadow-inner relative min-h-[400px]">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10 rounded-xl">
            <p className="text-xl font-semibold text-gray-600 animate-pulse">Loading Sheet Music...</p>
          </div>
        )}
        <div ref={containerRef} className="w-full overflow-x-auto" />
      </div>
    </div>
  );
}
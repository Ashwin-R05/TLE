import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Activity, Code2, Cpu, Check, Play, RefreshCw } from 'lucide-react';
import { cn } from '../../utils/cn';

type TerminalTab = 'client_pipeline' | 'student_kernel' | 'telemetry_hud';

export const LiveTelemetryTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TerminalTab>('client_pipeline');
  const [isRunning, setIsRunning] = useState(false);
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([
    '[INIT] Noth Studio Cluster v2.4.8 online',
    '[ROUTING] Edge nodes: IN-BLR-01 (18ms), SG-SIN-02 (42ms)',
    '[STATUS] Active client sprints: 3 | Mentorship nodes: 8',
    '[METRIC] Core Web Vitals: 98/100 (LCP 0.82s, CLS 0.001)',
  ]);

  const handleRunSim = () => {
    setIsRunning(true);
    const newLog = `[${new Date().toLocaleTimeString()}] ${
      activeTab === 'client_pipeline'
        ? '⚡ Compiled AST tree (42 modules) in 128ms → Zero bundle leakage'
        : activeTab === 'student_kernel'
        ? '🔬 Ran prior-art verification: 0 direct patent collisions found in target claims'
        : '📡 Streamed telemetry ping: 18 active IoT nodes reporting normal thermal state'
    }`;

    setTimeout(() => {
      setSimulatedLogs((prev) => [newLog, ...prev.slice(0, 4)]);
      setIsRunning(false);
    }, 450);
  };

  return (
    <div className="w-full rounded-2xl glass-card-bespoke overflow-hidden shadow-2xl border border-white/10 hud-crosshair">
      {/* Window Title Bar */}
      <div className="px-4 py-3 bg-surface-300/80 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-[11px] font-mono text-slate-400 ml-2 flex items-center gap-1.5">
            <Terminal size={12} className="text-brand-cyan" /> noth-core-runtime
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono text-brand-emerald bg-brand-emerald/10 border border-brand-emerald/20 px-2 py-0.5 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald animate-ping" />
            60 FPS LIVE
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/[0.06] bg-surface-200/50 px-2 pt-2 gap-1 overflow-x-auto">
        <button
          onClick={() => setActiveTab('client_pipeline')}
          className={cn(
            'px-3.5 py-2 text-xs font-mono rounded-t-lg transition-all flex items-center gap-1.5 border-t border-x cursor-pointer',
            activeTab === 'client_pipeline'
              ? 'bg-surface-100/90 text-brand-cyan border-brand-cyan/40 border-b-transparent shadow-sm'
              : 'border-transparent text-slate-500 hover:text-slate-300'
          )}
        >
          <Code2 size={13} />
          client_pipeline.ts
        </button>

        <button
          onClick={() => setActiveTab('student_kernel')}
          className={cn(
            'px-3.5 py-2 text-xs font-mono rounded-t-lg transition-all flex items-center gap-1.5 border-t border-x cursor-pointer',
            activeTab === 'student_kernel'
              ? 'bg-surface-100/90 text-brand-violet border-brand-violet/40 border-b-transparent shadow-sm'
              : 'border-transparent text-slate-500 hover:text-slate-300'
          )}
        >
          <Cpu size={13} />
          student_kernel.rs
        </button>

        <button
          onClick={() => setActiveTab('telemetry_hud')}
          className={cn(
            'px-3.5 py-2 text-xs font-mono rounded-t-lg transition-all flex items-center gap-1.5 border-t border-x cursor-pointer',
            activeTab === 'telemetry_hud'
              ? 'bg-surface-100/90 text-brand-emerald border-brand-emerald/40 border-b-transparent shadow-sm'
              : 'border-transparent text-slate-500 hover:text-slate-300'
          )}
        >
          <Activity size={13} />
          telemetry.log
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4 sm:p-5 font-mono text-xs text-slate-300 bg-[#07090F]/90 min-h-[220px]">
        <AnimatePresence mode="wait">
          {activeTab === 'client_pipeline' && (
            <motion.div
              key="pipeline"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-2.5"
            >
              <div className="text-slate-500">// Production Client Delivery Stack</div>
              <div>
                <span className="text-brand-violet">export const</span>{' '}
                <span className="text-brand-cyan">nothBuild</span> = &#123;
              </div>
              <div className="pl-4 text-slate-300 space-y-1">
                <div>architecture: <span className="text-amber-300">'Micro-frontend + Edge Compute'</span>,</div>
                <div>targetLatency: <span className="text-brand-emerald">'&lt; 400ms p95'</span>,</div>
                <div>ciCdPipeline: <span className="text-slate-400">['GitHub Actions', 'Docker', 'Vercel/AWS']</span>,</div>
                <div>handoffWarranty: <span className="text-brand-cyan">30 /* days post-launch */</span>,</div>
              </div>
              <div>&#125;;</div>
            </motion.div>
          )}

          {activeTab === 'student_kernel' && (
            <motion.div
              key="kernel"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-2.5"
            >
              <div className="text-slate-500">// 1-on-1 Student Idea-to-Patent Kernel</div>
              <div>
                <span className="text-brand-violet">fn</span>{' '}
                <span className="text-brand-cyan">evaluate_idea</span>(hypothesis: &amp;<span className="text-amber-300">StudentIdea</span>) -&gt; <span className="text-brand-emerald">ExecutionPath</span> &#123;
              </div>
              <div className="pl-4 text-slate-300 space-y-1">
                <div><span className="text-brand-violet">let</span> prior_art = scan_google_patents(&amp;hypothesis.keywords);</div>
                <div><span className="text-brand-violet">let</span> novelty_moat = isolate_algorithmic_differentiation();</div>
                <div><span className="text-brand-emerald">Ok</span>(PrototypeSprint::build(novelty_moat))</div>
              </div>
              <div>&#125;</div>
            </motion.div>
          )}

          {activeTab === 'telemetry_hud' && (
            <motion.div
              key="telemetry"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-2"
            >
              <div className="text-slate-500">// Live Studio Activity Log</div>
              {simulatedLogs.map((log, index) => (
                <div key={index} className="text-slate-300 flex items-start gap-2">
                  <span className="text-brand-cyan select-none">❯</span>
                  <span className="break-all">{log}</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Terminal Footer */}
      <div className="px-4 py-2.5 bg-surface-200/80 border-t border-white/[0.06] flex items-center justify-between">
        <div className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5">
          <Check size={12} className="text-brand-emerald" /> Types checked &amp; validated
        </div>

        <button
          onClick={handleRunSim}
          disabled={isRunning}
          className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 hover:bg-brand-cyan/20 hover:border-brand-cyan/50 transition-all flex items-center gap-1 cursor-pointer disabled:opacity-50"
        >
          {isRunning ? (
            <>
              <RefreshCw size={11} className="animate-spin" /> Executing...
            </>
          ) : (
            <>
              <Play size={11} /> Simulate Action
            </>
          )}
        </button>
      </div>
    </div>
  );
};

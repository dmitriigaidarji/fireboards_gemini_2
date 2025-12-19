
import React from 'react';
import { Sparkles, Loader2 } from 'lucide-react';
import { getBoardRecommendation } from '../services/geminiService';

const BoardFinder: React.FC = () => {
  const [weight, setWeight] = React.useState(75);
  const [skill, setSkill] = React.useState('Intermediate');
  const [waves, setWaves] = React.useState('Tropical Beach Breaks');
  const [loading, setLoading] = React.useState(false);
  const [recommendation, setRecommendation] = React.useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    const result = await getBoardRecommendation(weight, skill, waves);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <section className="py-20 bg-stone-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-600/20 text-orange-500 border border-orange-600/30 rounded-full text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" /> AI Board Finder
            </div>
            <h2 className="heading-font text-5xl font-bold leading-tight">CHOOSE YOUR WEAPON</h2>
            <p className="text-stone-400 text-lg">
              Not sure what to ride? Our AI guide knows Siargao better than anyone. 
              Tell us your profile and we'll find your perfect Fire Board.
            </p>

            <div className="space-y-4 max-w-md">
              <div>
                <label className="block text-sm text-stone-500 mb-2">Weight ({weight}kg)</label>
                <input 
                  type="range" min="40" max="120" value={weight} 
                  onChange={(e) => setWeight(parseInt(e.target.value))}
                  className="w-full accent-orange-600"
                />
              </div>
              <div>
                <label className="block text-sm text-stone-500 mb-2">Skill Level</label>
                <select 
                  value={skill} onChange={(e) => setSkill(e.target.value)}
                  className="w-full bg-stone-800 border border-stone-700 p-3 rounded-sm outline-none focus:border-orange-600"
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>Pro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-stone-500 mb-2">Target Waves</label>
                <select 
                  value={waves} onChange={(e) => setWaves(e.target.value)}
                  className="w-full bg-stone-800 border border-stone-700 p-3 rounded-sm outline-none focus:border-orange-600"
                >
                  <option>Tropical Beach Breaks</option>
                  <option>Hollow Reef Breaks (Cloud 9)</option>
                  <option>Small Summer Peelers</option>
                </select>
              </div>
              <button 
                onClick={handleSearch}
                disabled={loading}
                className="w-full py-4 bg-orange-600 hover:bg-orange-700 transition-colors text-white font-bold flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin" /> : 'GET RECOMMENDATION'}
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-stone-800/50 backdrop-blur-md border border-white/5 p-8 rounded-2xl min-h-[300px] flex flex-col justify-center">
              {recommendation ? (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <h4 className="heading-font text-2xl font-bold text-orange-500 mb-4">THE VERDICT</h4>
                  <p className="text-xl leading-relaxed italic text-stone-200">"{recommendation}"</p>
                </div>
              ) : (
                <div className="text-center text-stone-600">
                  <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-20" />
                  <p>Your ideal setup will appear here...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardFinder;

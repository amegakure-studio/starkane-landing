import type { Character } from 'types';

import { CharacterDetail } from './CharacterDetail';

interface CharacterSelectedProps {
  character?: Character;
}

const CharacterSelected = ({ character }: CharacterSelectedProps) => (
  <div>
  {/* <div className="flex flex-1 justify-center"> */}
    {character ? (
      <CharacterDetail character={character} />
    ) : (
      <h1 className="text-3xl w-[460px] flex-1 flex-col items-center ">Select an character to view your detail</h1>
    )}
  </div>
);

export { CharacterSelected };

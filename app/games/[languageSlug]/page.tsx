//components
import Container from "@/components/ui/container";
import Credits from "@/components/ui/credits";
import NavigationBar from "@/components/ui/navigationBar";

// utils
import { languageGames } from "@/utils/globalVariables";

export default async function Language({ params }: { params: { languageSlug: string } }) {
  const {languageSlug} = await params;

  if (!languageSlug) return <p>No data...</p>;

  const capitalizedLanguageName =
    languageSlug.charAt(0).toUpperCase() + languageSlug.slice(1);
  const gameItem = languageGames[languageSlug];
  const gameTitle = gameItem?.data?.title ?? "Let's play!";

  return (
    <Container>
      <div className="game-box">
        {gameItem ? (
          <>
            <div className={"instructions"}>
              <div>
                <NavigationBar />
                <h2 className={"margin-bottom"}>{gameTitle}</h2>
                <p>{gameItem.data.instructions}</p>
              </div>
              <div>
                {gameItem.data.credits && (
                  <Credits>{gameItem.data.credits}</Credits>
                )}
              </div>
            </div>

            <div className={"game"}>
              <div className="game-container">{gameItem.component}</div>
            </div>
          </>
        ) : (
          <>
            <h2>{":("}</h2>
            <p>
              Unfortunately there's no game for the{" "}
              <span className={"bold"}>{languageSlug}</span> language
            </p>
          </>
        )}
      </div>
    </Container>
  );
};

import TextContainer from "../components/TextContainer";

export const deckSettings = (user, deckOptions, handleDeckOptions, handleDeckKeys) =>{
  return (<>
    <TextContainer header="DECK OPTIONS"
      containerClasses="reverse thick shadow"
      textClasses="options"
      border={true}>
      <div>
        <div className="sub-header">DETAILS</div>
        <div>Times Shuffled: {user.timesShuffled ? user.timesShuffled : 0}</div>
        
        <br/>
        <span htmlFor="shuffle-times">Set Number of Shuffles (1-100):</span>
        <input
          type="text"
          name="shuffleTimes"
          data-type="number"
          data-min={1}
          data-max={100}
          className="deck-options shuffle-times num-box 3 browser-default"
          value={deckOptions.shuffleTimes}
          autoComplete="off"
          onChange={(e) => handleDeckOptions(e)}
          onKeyDown={(e) => handleDeckKeys(e)} />
      </div>
      <div>
        <div className="sub-header">DETAILS</div>
        <div>Times Shuffled: {user.timesShuffled ? user.timesShuffled : 0}</div>
        
        <br/>
        <span htmlFor="shuffle-times">Set Number of Shuffles (1-100):</span>
        
      </div>
      <div>
        <div className="sub-header">DETAILS</div>
        <div>Times Shuffled: {user.timesShuffled ? user.timesShuffled : 0}</div>
        
        <br/>
        <span htmlFor="shuffle-times">Set Number of Shuffles (1-100):</span>
        
      </div>
      <div>
        <div className="sub-header">DETAILS</div>
        <div>Times Shuffled: {user.timesShuffled ? user.timesShuffled : 0}</div>
        
        <br/>
        <span htmlFor="shuffle-times">Set Number of Shuffles (1-100):</span>
        
      </div>
      <div>
        <div className="sub-header">DETAILS</div>
        <div>Times Shuffled: {user.timesShuffled ? user.timesShuffled : 0}</div>
        
        <br/>
        <span htmlFor="shuffle-times">Set Number of Shuffles (1-100):</span>
        
      </div>
      <div>
        <div className="sub-header">DETAILS</div>
        <div>Times Shuffled: {user.timesShuffled ? user.timesShuffled : 0}</div>
        
        <br/>
        <span htmlFor="shuffle-times">Set Number of Shuffles (1-100):</span>
        
      </div>
      
    </TextContainer>
    </>
)}
import "./SummaryCards.css";

export function SummaryCards({ quests }) {
  let totalQuestsNumber = quests.length;
  let totalCompletedQuests = 0;
  let totalPendingQuests = 0;

  const renderStatsData = () => {
    return quests.map((quest) => {
     return (quest.completed) ? totalCompletedQuests++ : totalPendingQuests++;
    }
    );
  }
  renderStatsData();


  return (
    <div className="summary-cards-wrapper">
      <div className="total-quests-card">
        <div className="card-image">
          <img alt="clipboard image" src="#" />
        </div>
        <div className="card-info">
          <span>Total Quests</span>
          <span>{totalQuestsNumber}</span>
        </div>
      </div>

      <div className="completed-quests-card">
        <div className="card-image">
          <img alt="clipboard image" src="#" />
        </div>
        <div className="card-info">
          <span>Completed</span>
          <span>{totalCompletedQuests}</span>
        </div>
      </div>

      <div className="pending-quests-card">
        <div className="card-image">
          <img alt="clipboard image" src="#" />
        </div>
        <div className="card-info">
          <span>Pending</span>
          <span>{totalPendingQuests}</span>
        </div>
      </div>

      <div className="progress-card">
        <div className="card-image">
          <img alt="clipboard image" src="#" />
        </div>
        <div className="card-info">
          <span>Progress</span>
          <span>0</span>
        </div>
        <div className="progress-bar"></div>
      </div>
    </div>
  );
}
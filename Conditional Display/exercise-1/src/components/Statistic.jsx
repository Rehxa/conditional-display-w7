/** @format */

function Statistic({ courseResults }) {
  const findMaxScores = Math.max(
    ...courseResults.map((student) => student.score)
  );
  const findMinScores = Math.min(
    ...courseResults.map((student) => student.score)
  );
  const findAvgScores = (
    courseResults.reduce((acc, student) => acc + student.score, 0) /
    courseResults.length
  ).toFixed(2);
  return (
    <div className='statistic'>
      <h1>Statistics</h1>
      <p>Max: {findMaxScores}</p>
      <p>Min: {findMinScores}</p>
      <p>Avg: {findAvgScores}</p>
    </div>
  );
}
export default Statistic;

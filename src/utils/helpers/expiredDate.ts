const expiredDate = ({
  oldDate,
  currentDate,
}: {
  oldDate: Date;
  currentDate: Date;
}) => {
  // check if current date is newer than oldDate
  return (
    currentDate.getFullYear() ||
    currentDate.getMonth() !== oldDate.getMonth() ||
    currentDate.getDate() !== oldDate.getDate()
  );
};
export default expiredDate;

const ListData = (() => {
    var caseData = [];
    var getCaseData = () => {
      return caseData;
    };
    const setCaseData = (data) => {
      caseData = data;
    };
    return {
      getCaseData: getCaseData,
      setCaseData: setCaseData
    }
  })();

  export default ListData;
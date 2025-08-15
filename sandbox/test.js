describe('my suite', () => {
  it('my test', async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 150);
    });
  });
}).timeout(200);